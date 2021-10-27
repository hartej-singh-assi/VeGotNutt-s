import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$:any;
  product:any = {};
  id: string | null;
  
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    categoryService: CategoryService,
    private productService : ProductService) {
    this.categories$ = categoryService.getCategories();
    // console.log(this.categories$)

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).pipe(take(1)).subscribe((p: any) => this.product = p)
    console.log(this.product)
    
  }

  save(product: any[]){
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
    // console.log(product);
  }

  delete(){
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
    
  }
  ngOnInit(): void {
  }

}
