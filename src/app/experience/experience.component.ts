import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],

})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Territory Manager KSA',
      company: 'OMNIX International Co.',
      range: 'Jan 2021 – Present',
      summary: 'Managing sales activities and strategic accounts across KSA. Building strong customer relationships and delivering tailored IT solutions.',
      responsibilities: [
        'Develop and execute sales strategies for territory growth',
        'Account and Customer Relationship Management',
        'Lead deals negotiations and pricing plans',
        'Prepare sales reports, tenders, proposals, and presentations',
        'Handle strategic accounts such as Saudi Airlines, GACA, SAVOLA Group, Panda, Ministry of Hajj'
      ]
    },
    {
      title: 'Senior Sales Team Leader / Senior Sales Accounts Manager',
      company: 'Arabic Computer Systems (ACS)',
      range: '2008 – Aug 2019',
      summary: 'Led sales teams in Western Region, managing large enterprise and government accounts.',
      responsibilities: [
        'Sales strategy and pipeline planning',
        'Customer engagement and account management',
        'Closed key deals with hospitals, airlines, and government entities',
        'Prepared and delivered tenders, proposals, and sales reports',
        'Mentored and guided junior sales team members'
      ]
    },
    {
      title: 'Tenders & Proposals Manager – Western Region',
      company: 'Arabic Computer Systems (ACS)',
      range: 'Jul 2005 – Dec 2007',
      summary: 'Established and managed proposals/tenders section to support company-wide sales.',
      responsibilities: [
        'Managed full tender and proposal preparation process',
        'Coordinated with departments/vendors to meet RFP requirements',
        'Calculated prices, prepared cost analysis, and ensured quality submissions'
      ]
    },
    {
      title: 'Tenders & Proposals Manager – Western Region',
      company: 'Ebttikar (Al Faisaliah Group)',
      range: 'Jan 2003 – Jun 2005',
      summary: 'Built tenders department from scratch and managed all submissions for Western Region.',
      responsibilities: [
        'Led preparation of proposals and tenders',
        'Tracked submissions and maintained database of results',
        'Ensured quality assurance and compliance with RFPs'
      ]
    },
    {
      title: 'Senior Sales Administrator – Western Region',
      company: 'FAST (Al Faisaliah Group)',
      range: '1998 – Dec 2002',
      summary: 'Oversaw tenders and proposals, sales reporting, and order processing for large-scale projects.',
      responsibilities: [
        'Managed proposals lifecycle from RFP to submission',
        'Prepared sales reports with SAP system',
        'Supervised exhibitions, seminars, and client presentations'
      ]
    },
    {
      title: 'Senior Sales Administrator – Western Region',
      company: 'Modern Electronics Est. (HP Division – Al Faisaliah Group)',
      range: '1990 – 1992',
      summary: 'Handled proposals, tenders, and sales reporting for HP enterprise solutions.',
      responsibilities: [
        'Prepared and managed tender documentation',
        'Ensured proposals met customer and company standards',
        'Generated sales reports for top management'
      ]
    },
    {
      title: 'IT Supervisor & Programmers Team Leader',
      company: 'Diners Club Credit Card (Bin Mahfooz Group)',
      range: '1989 – 1990',
      summary: 'Led IT team for financial systems and credit card operations.',
      responsibilities: [
        'Supervised programmers team',
        'Oversaw IT systems for financial transactions'
      ]
    }
  ];
}
