import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConverSpacePipes } from './shared/convert-space-pipes';
import { StartComponent } from './shared/start.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductComponent,
    ConverSpacePipes,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
