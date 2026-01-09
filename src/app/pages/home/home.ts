import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {}
  LogOut() {
    console.log('Navigating to home page');
    this.router.navigate(['/blank-layout']);
  }
  profile(){
  console.log('profile clicked');
  this.router.navigate(['/home/profile']);
  
}
}
