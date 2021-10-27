import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart> | undefined;
  // shoppingCartItemCount!: number;

  constructor(private shoppingCartService : ShoppingCartService) { }

  async ngOnInit(){
    // let cart$ = await this.shoppingCartService.getCart();
    // cart$.valueChanges().subscribe((cart: any)=>{
    //   this.shoppingCartItemCount = 0
    //     for (let productId in cart.items) 
    //         this.shoppingCartItemCount += cart.items[productId].quantity;
    // })
    this.cart$ = await this.shoppingCartService.getCart();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

}
