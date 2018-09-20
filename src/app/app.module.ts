import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MystoreComponent } from './mystore/mystore.component';
import { StorePipe } from './store.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    SignInComponent,
    SignUpComponent,
    MystoreComponent,
    StorePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path:'cart',
        component:CartComponent
      },
      { 
        path:'sign-in',
        component:SignInComponent
      },
      {
        path:'sign-up',
        component:SignUpComponent
      },
      {
        path:'store',
        component:StoreComponent
      },
      {
        path:'mystore',
        component:MystoreComponent
      },
      {
        path:'',
        redirectTo:'/sign-in',
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
