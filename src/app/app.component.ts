import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showIntroScreens = true;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.showIntroScreens) {
      this.router.navigate(['/onboarding1']);
    } else {
      this.router.navigate(['/cadastro']);
    }
  }
}
