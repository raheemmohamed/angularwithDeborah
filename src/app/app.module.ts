import { Component } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConverSpacePipes } from './shared/convert-space-pipes';
import { StartComponent } from './shared/start.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConverSpacePipes,
    StartComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // importa HTTP request for send request to backend server
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ])
  ],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule { }
