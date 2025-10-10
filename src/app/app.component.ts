import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  showScrollTop = false;
  footerClass = ''; // 👈 class for footer
  activeRoute = '';


  constructor(private title: Title, private meta: Meta , private router: Router) {}

  ngOnInit() {

    // detect route for footer style
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        if (url === '/home' || url === '/' || url === '/subhome') {
        }
      });

      this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });

  

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

  onRouteActivate(event: any) {}
}
