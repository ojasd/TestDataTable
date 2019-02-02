import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {ZipcodePipe} from './zipcode.pipe';
import {SortDirective} from './sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodePipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
