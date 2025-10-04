import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent implements OnInit{
  currentYear = new Date().getFullYear();

   constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('About Me | Ehab ElSayed');
    this.meta.updateTag({ name: 'description', content: 'Learn more about Ehab ElSayed, Sales Director & Business Development Manager with 20+ years experience.' });
  }

  toggleTheme(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
  }

}
