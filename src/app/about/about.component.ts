import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone:false
})
export class AboutComponent {
 profile = {
    name: 'Ehab ElSayed Saleh',
    title: 'Territory Manager / Sales Director / Business Development Manager',
    summary: `Over 20 years of proven success in sales leadership, business development, 
              and account management across GCC enterprise and government clients. 
              Skilled in driving strategic growth, leading high-performing teams, 
              and building long-term customer relationships in IT and technology solutions.`,
    careerObjective: `To leverage my extensive experience in sales and business development 
              to contribute to organizational growth, deliver strategic value, 
              and lead high-impact teams in achieving ambitious targets.`,
    education: {
      degree: 'Bachelor of Commerce in Accounting',
      university: 'Helwan University, Cairo, Egypt',
      graduation: 'May 1989 — Very Good with Honors'
    },
    languages: [
      'Arabic (Native)',
      'English (Excellent)',
      'French (Basic)'
    ],
    personal: {
      nationality: 'Egyptian',
      birthDate: '9th March 1968',
      maritalStatus: 'Married '
    }
  };

  

}
