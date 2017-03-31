import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  declarations:[
    AppComponent,
    ClockComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
