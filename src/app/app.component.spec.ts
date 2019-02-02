import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ZipcodePipe} from './zipcode.pipe';
import {SortDirective} from './sort.directive';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ZipcodePipe,
        SortDirective
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [ AppService ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
