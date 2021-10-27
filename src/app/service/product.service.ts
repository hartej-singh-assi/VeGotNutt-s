import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db :AngularFireDatabase) { }

  create(product: any[]){
    this.db.list('/products').push(product)
  }

  getAll(){
    return this.db.list('/products')
    .snapshotChanges().pipe(
      map((actions: any[]) =>
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      ));
  }

  get(productId: string){
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId: string,product: Partial<unknown>){
    return this.db.object('/products/' + productId).update(product)
  }

  delete(productId: any){
    return this.db.object('/products/'+productId).remove()
  }
  
}
