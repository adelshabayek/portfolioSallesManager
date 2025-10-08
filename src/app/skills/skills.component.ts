import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  coreSkills = [
    { name: 'Sales Strategy', level: 90 },
    { name: 'Business Development', level: 88 },
    { name: 'Negotiation', level: 85 },
    { name: 'Leadership', level: 95 },
    { name: 'CRM Tools (Salesforce, HubSpot, MS CRM)', level: 80 },
    { name: 'IT Solutions Sales (Security, BI, Cloud, ERP)', level: 78 },
  ];

  personalTraits = [
    'Self-Motivated',
    'Organized',
    'Flexible',
    'Dedicated',
    'Team Leading',
    'Hard Worker',
    'Communication Skills',
    'Ambitious',
    'Problem Solver',
    'Open-Minded',
  ];

  chartData: any;
  chartOptions: any;

  ngOnInit(): void {
    this.chartData = {
      labels: this.coreSkills.map((s) => s.name),
      datasets: [
        {
          label: 'Skill Level (%)',
          data: this.coreSkills.map((s) => s.level),
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: '#0d6efd',
          pointBackgroundColor: '#0d6efd',
          borderWidth: 2,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
      },
      scales: {
        r: {
          angleLines: { display: true },
          suggestedMin: 0,
          suggestedMax: 100,
          grid: { color: 'rgba(0,0,0,0.05)' },
          pointLabels: { font: { size: 12, weight: 'bold' } },
        },
      },
    };
  }
}
