import { Component } from '@angular/core';
import { EcommerceApiService } from '../../services/ecommerce_api.service';
import { Router } from '@angular/router';
import { IProduct} from '../../interface/IProduct';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

  constructor(private service: EcommerceApiService, private router: Router) { 
  }

  ngOnInit() {
    this.navigateToPage();
  }

  arrayWithLengthOfTotalPages: Array<any> = Array(1);
  products!: IProduct;
  actualPage!: number;
  logouting: boolean = false;

  navigateToPage(wantedPage?: number) {
    this.handleApiResponse(this.service.fetchAllProducts(wantedPage || 1, 10))
  }

  showConfirmLogout(){
    this.logouting = true;
  }

  cancelLogout(){
    this.logouting = false;
  }

  logout(){
    this.logouting = false;
    this.service.set('accessToken','');
    this.service.router.navigate([''])
  }

  private handleApiResponse(observer: Observable<IProduct>) {
    observer.subscribe({
      next: (data) => {
        this.products = data;
        this.arrayWithLengthOfTotalPages = Array(data.totalPages);
        this.actualPage = data.pageable.pageNumber;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });    
  }

}
