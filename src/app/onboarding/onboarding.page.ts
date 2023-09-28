import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/tabs/tab1');
    }, 3000);
  }
}
