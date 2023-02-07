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

const appRoutes =[
  {path:'',component:MainPageComponent},
  {path:'auth',component:AuthFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthFormComponent,
    MainPageComponent,
    ListItemComponent
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
