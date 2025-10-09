import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  
})
export class AboutComponent implements OnInit {
  profile: any;

  constructor(private el: ElementRef, private ApiService: ApiService) {}
  ngOnInit(): void {
    this.ApiService.getData().subscribe((data) => {
      this.profile = data.about.profile;
    });
  }
}
