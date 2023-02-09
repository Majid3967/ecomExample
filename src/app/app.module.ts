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


const appRoutes =[
  {path:'',component:MainPageComponent,resolve:{data:ItemsResolveService}},
  {path:'auth',component:AuthFormComponent},
  {path:'productdetail',component:ProductDetailComponent},
  
  {path:'detail',component:DetailComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},

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
    DetailComponent
    

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
