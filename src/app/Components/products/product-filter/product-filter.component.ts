import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories$: any;
  @Input('category') category: any;

  constructor(categoryService: CategoryService) {
    this.categories$=categoryService.getCategories(); 
   }

  ngOnInit(): void {
  }

}
