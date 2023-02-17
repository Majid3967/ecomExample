import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemsResolveService } from './services/resolvers/item-data-resolve.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FilterCategoryComponent } from './components/filter-category/filter-category.component';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './detail/productdetail/productdetail.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';
import { CartResolveService } from './services/resolvers/cart-data-resolve.service';
import { CartItemsResolveService } from './services/resolvers/cartItems-data.resolve.service';
import { SuccessPageComponent } from './components/success-page/success-page.component';


const appRoutes =[
  {path:'',component:MainPageComponent,resolve:{itemData:ItemsResolveService,cartData:CartResolveService}},
  {path:'auth',component:AuthFormComponent},
  {path:'productdetail',component:ProductDetailComponent},
  
  {path:'detail',component:DetailComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard],resolve:{cartItemData:CartItemsResolveService}},
  {path:'success',component:SuccessPageComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthFormComponent,
    MainPageComponent,
    ListItemComponent,
    PageNotFoundComponent,

    FilterCategoryComponent,
    LoadingSpinnerComponent,

    CartComponent,
    ProductDetailComponent,
    DetailComponent,
    SuccessPageComponent
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
