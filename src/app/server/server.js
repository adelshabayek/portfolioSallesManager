// server/server.js
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const items = Array.isArray(req.body.items) ? req.body.items : [];
    const line_items = items.map(it => ({
      price_data: {
        currency: 'usd',
        product_data: { name: it.product.title, images: it.product.image ? [it.product.image] : [] },
        unit_amount: Math.round((it.product.price || 0) * 100)
      },
      quantity: it.qty || 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: (process.env.BASE_URL || 'http://localhost:4200') + '/shop/checkout/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: (process.env.BASE_URL || 'http://localhost:4200') + '/shop/cart'
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Mock server listening on ${port}`));
