import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { IToken } from '../interface/IToken';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EcommerceApiService {


  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    
  }

  
  signIn(username: string, password: string) {
    username = username.trim();

    const body = { username, password };

    this.http.post<IToken>('http://localhost:80/auth', body).subscribe({
      next: (response) => { 
        if (typeof window !== 'undefined') { 
          this.set('accessToken', response.accessToken);
        }
        this.router.navigate(['/home']);
        console.log('Usuário autenticado com sucesso!');
      },
      error: (err) => {
        alert('Usuário ou senha inválidos!');
      }
    });
  }

  isAuthenticated(): boolean {
      return !!localStorage.getItem('accessToken');
      
  }

  private set(key: string ,value: string) {
    localStorage.setItem(key, value);
  }
}
