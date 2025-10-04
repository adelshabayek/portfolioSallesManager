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
        'service_bj1cnhj', // ID الخدمة من EmailJS
        'template_eq5r86s', // ID القالب
        {
          from_name: this.contactForm.value.name,
          reply_to: this.contactForm.value.email,
          message: this.contactForm.value.message
        },
        'Tp7IW-rS1VLc0fjmz' // Public Key من EmailJS
      );

      this.successMessage = '✅ Message sent successfully!';
      this.contactForm.reset();
      this.submitted = false;
    } catch (error) {
      this.errorMessage = '❌ Failed to send message. Try again later.';
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  // بيانات الاتصال من السيرة الذاتية
  contactInfo = {
    phone: '+966 503898146',
    email1: 'esaleh1968@gmail.com',
    email2: 'esaleh@acs.com.sa',
    linkedin: 'https://www.linkedin.com/in/ehab-elsayed-saleh-68035017/'
  };
}
