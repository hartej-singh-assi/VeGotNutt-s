import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products!: Product[];
  filteredProducts: Product[] | undefined;
  subscription: Subscription | undefined;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
    .subscribe((products:Product[])=>this.filteredProducts = this.products = products)
  }
  

  filter(query: string){
    this.filteredProducts = (query) ?
      this.products.filter((p:any) => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
