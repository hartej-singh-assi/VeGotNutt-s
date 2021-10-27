import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path: 'my-orders',
    component:MyOrdersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'shopping-cart',
    component:ShoppingCartComponent
  },

  
  {
    path:'check-out',
    component:CheckOutComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'order-success',
    component:OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'my/orders',
    component:MyOrdersComponent,
    canActivate: [AuthGuard]
  },



  
  {
    path:'admin/products/new',
    component:ProductFormComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'admin/products/:id',
    component:ProductFormComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'admin/products',
    component:AdminProductsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'admin/orders',
    component:AdminOrdersComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
