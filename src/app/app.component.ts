import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  showScrollTop = false;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Ehab El-Sayed');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn more about Ehab ElSayed, Sales Director & Business Development Manager with 20+ years experience.',
    });
  }

  toggleTheme(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
