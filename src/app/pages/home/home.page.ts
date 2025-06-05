import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {

   access_token: string = localStorage.getItem('accessToken') || '';

}
