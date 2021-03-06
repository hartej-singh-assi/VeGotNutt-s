import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Product } from '../models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shopping-cart-items';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }

  async getCart():Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+cartId)
      .valueChanges().map((x:any) => new ShoppingCart(x.items))
  }

  async addToCart(product:Product){
    this.updateItem(product,1)
  }

  async removeFromCart(product:Product){
    this.updateItem(product, -1)
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/'+ cartId + '/items').remove();
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId():Promise<string>{
    let cartId = localStorage.getItem('cartId')
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId',result.key!);
    return result.key!;
  }

  private async updateItem(product:Product,change:number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    item$.valueChanges().take(1).subscribe((item:any)=>{
      let quantity = (item.quantity || 0) + change; // error TypeError: Cannot read properties of null (reading 'quantity')
      console.log(quantity);
      if (quantity === 0) item$.remove();
      else  item$.update({
        title:product.title, 
        imageUrl:product.imageUrl, 
        price: product.price,
        quantity:quantity
      })
      // if(item) item$.update({quantity: item.quantity + 1});
      // else item$.set( {title:product.title,imageUrl:product.imageUrl,price: product.price, quantity:1});
       
    })
  }
}
