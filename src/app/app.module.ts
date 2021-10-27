import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from "angular-datatables";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { LoginComponent } from './Components/login/login.component';
import { environment } from 'src/environments/environment';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { AuthGuard as AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { ProductFilterComponent } from './Components/products/product-filter/product-filter.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { ProductQuantityComponent } from './Components/product-quantity/product-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    LoginComponent,
    CheckOutComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
