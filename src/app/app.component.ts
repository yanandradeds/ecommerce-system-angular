import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.page';
import { HomePageComponent } from './pages/home/home.page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-system-angular';
}
