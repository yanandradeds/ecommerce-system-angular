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
export class AuthenticationPage {


  private service = inject(EcommerceApiService)

  errorMessage: string | null = null;

  username: string = '';
  password: string = '';

  ngOnInit(){
    if(this.service.isAuthenticatedAndValid()){
      this.service.router.navigate(['/home']);
    }
  }

  signIn() {
    this.service.signIn(this.username, this.password).subscribe({
      next: (response) => {
        if (typeof window !== 'undefined') {
          this.service.set('accessToken', response.accessToken);
        }
        this.service.router.navigate(['/home']);
        console.log('Usuário autenticado com sucesso!');
      },
      error: (err) => {
        if (err.status === 500) { 
          this.errorMessage = 'Senha ou usuário inválido.';
        } else {
          alert('Failed to connect to the server. Please try again later.');
        }
      }
    });
  }
 

}
