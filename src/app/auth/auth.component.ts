import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const flipBox = document.getElementById('flipBox');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    toSignup?.addEventListener('click', () => {
      flipBox?.classList.add('show-signup');
    });

    toLogin?.addEventListener('click', () => {
      flipBox?.classList.remove('show-signup');
    });
  }
}
