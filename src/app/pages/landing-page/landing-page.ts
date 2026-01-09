import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [NzButtonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
   constructor(private router: Router) {}

  getLogIn() {
    console.log('Navigating to login page');
    this.router.navigate(['/login']);
  }

  getRegister() {
    console.log('Navigating to login page');
    this.router.navigate(['/register']);
  }

}
