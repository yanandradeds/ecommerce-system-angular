import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { IToken } from '../interface/IToken';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IProduct } from '../interface/IProduct';


@Injectable({
  providedIn: 'root'
})
export class EcommerceApiService {

  constructor(
    private http: HttpClient,
    
  ) { 
    
  }

  private decoder = jwtDecode;
  router: Router = inject(Router);

  signIn(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:80/auth', { username, password });
  }

  fetchAllProducts(pageNumber: number, limit: number): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:80/product',{
      headers: this.getToken(), 
      params: { page: pageNumber.toString(), limit: limit.toString()}
    });
  }
  
  isAuthenticatedAndValid(): boolean {
    if(!this.validateToken()){
      return false;
    }
  
    return !!localStorage.getItem('accessToken');
  }

  goToPage(_page: number) {
    return this.http.get<IProduct>('http://localhost:80/product',{
      headers: this.getToken(), 
      params: { page: _page, limit: 10}
    });
  }

  set(key: string ,value: string) {
    localStorage.setItem(key, value);
  }

  private validateToken(): boolean {
    const token = localStorage.getItem('accessToken');

    if (!token) return false;

    const decoded: any = this.decoder(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp > currentTime;
  }

  private getToken(): HttpHeaders{
    return  new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  }
  
}
