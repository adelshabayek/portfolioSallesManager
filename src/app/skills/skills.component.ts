import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  coreSkills: any[] = [];
  personalTraits: string[] = [];
  chartData: any;
  chartOptions: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.coreSkills = data.skills.coreSkills;
      this.personalTraits = data.skills.personalTraits;

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
    });
  }
}
