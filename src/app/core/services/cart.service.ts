// src/app/core/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

export interface CartItem { product: Product; qty: number; }

@Injectable({providedIn: 'root'})
export class CartService {
  private readonly STORAGE_KEY = 'portfolio_cart_v1';
  private cart$ = new BehaviorSubject<CartItem[]>(this.load());
  cartChanges$ = this.cart$.asObservable();

  private load(): CartItem[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }
  private save(items: CartItem[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.cart$.next(items);
  }

  add(product: Product, qty = 1) {
    const items = this.load();
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx > -1) items[idx].qty += qty;
    else items.push({product, qty});
    this.save(items);
  }

  updateQty(productId: string, qty: number) {
    const items = this.load().map(i => i.product.id === productId ? {...i, qty} : i).filter(i => i.qty > 0);
    this.save(items);
  }

  remove(productId: string) {
    const items = this.load().filter(i => i.product.id !== productId);
    this.save(items);
  }

  clear() {
    this.save([]);
  }

  getSubtotal(): number {
    return this.load().reduce((s, i) => s + i.product.price * i.qty, 0);
  }
}
