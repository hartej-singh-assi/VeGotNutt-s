import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories', (ref) => ref.orderByChild('name'))
    .snapshotChanges().map((categories: any[]) => { return categories.map(c => ({ key: c.payload.key, ...(c.payload.val() as {}) })); });
  }
}
