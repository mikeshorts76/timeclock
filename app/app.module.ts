import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { ProductFilterPipe } from './products/product-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations:[
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
