import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ApiService } from '../core/services/api.service'; // adjust the path

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';
  contactInfo: any = {};

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.contactInfo = data.contact;
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
        'service_bj1cnhj',
        'template_tbva5hu',
        {
          from_name: this.contactForm.value.name,
          reply_to: this.contactForm.value.email,
          message: this.contactForm.value.message
        },
        'cUWQ0oMcFfZg6e9OK'
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
}
