import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async send() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const result = await emailjs.send(
        'service_bj1cnhj',     // Your Service ID
        'template_tbva5hu',   // Your Template ID
        {
          from_name: this.contactForm.value.name,
          reply_to: this.contactForm.value.email,
          message: this.contactForm.value.message
        },
        'cUWQ0oMcFfZg6e9OK'   // Your Public Key
      );

      console.log('SUCCESS!', result.status, result.text);
      this.successMessage = '✅ Message sent successfully!';
      this.contactForm.reset();
      this.submitted = false;
    } catch (error) {
      console.error('FAILED...', error);
      this.errorMessage = '❌ Failed to send message. Please try again later.';
    } finally {
      this.loading = false;
    }
  }

  contactInfo = {
    phone: '+966 503898146',
    email1: 'esaleh1968@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ehab-elsayed-saleh-68035017/'
  };
}
