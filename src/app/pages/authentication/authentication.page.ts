import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceApiService } from '../../services/ecommerce_api.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [CommonModule,FormsModule],
  templateUrl: './authentication.page.html',
  styleUrl: './authentication.page.scss'
})
export class AuthenticationComponent {


  private service = inject(EcommerceApiService)

  username: string = '';
  password: string = '';

  signIn(){
    this.service.signIn(this.username, this.password);
  }

}
