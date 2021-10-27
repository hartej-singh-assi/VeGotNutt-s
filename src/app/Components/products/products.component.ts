import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { ProductService } from 'src/app/service/product.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [] ;
  filteredProduct: Product[] | undefined;
  category: any;
  cart$!: Observable<ShoppingCart>;

  constructor(private productService : ProductService,private route: ActivatedRoute,private shoppingCartService : ShoppingCartService) { 

    

  }
  
  async ngOnInit(): Promise<void> {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProduct();
  }

  private populateProduct(){
    this.productService.getAll()
    .switchMap(products => {
    this.products = products;
    return this.route.queryParamMap;
    })
      .subscribe(params =>{
      this.category = params.get('category');
      this.applyFilter();     
  });
  }

  private applyFilter(){
    this.filteredProduct = (this.category) ?
    this.products?.filter(p => p.category === this.category) :
    this.products
  }

}
