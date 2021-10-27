import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  products: Product[] = [];
  category: any;
  filteredProduct: Product[] | undefined;
  cart$!: Observable<ShoppingCart>;
  // shoppingCartItemCount!: number;
 
  constructor(
    public auth: AuthService,
    route:ActivatedRoute,
    productService : ProductService,
    private shoppingCartService : ShoppingCartService
    ) {
    productService
      .getAll()
      .switchMap(products => {
      this.products = products;
      return route.queryParamMap;
      })
        .subscribe(params =>{
        this.category = params.get('category');
        this.filteredProduct = (this.category) ?
          this.products?.filter(p => p.category === this.category) :
          this.products

    });
    

  }
  async ngOnInit(): Promise<void> {
    this.cart$ = await this.shoppingCartService.getCart();
    // cart$.valueChanges().subscribe((cart: any)=>{
    //   this.shoppingCartItemCount = 0
    //     for (let productId in cart.items) 
    //         this.shoppingCartItemCount += cart.items[productId].quantity;
    // })
  }

  logout(){
    this.auth.logout();
  }

}
