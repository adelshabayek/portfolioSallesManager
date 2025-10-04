import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'portfolio';
  currentYear = new Date().getFullYear();

  toggleTheme(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
  }
}
