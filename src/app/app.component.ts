import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apiData;
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getAPIData();
  }

  getAPIData() {
    this.appService.getData().subscribe(
      res => {
        this.apiData = res;
      },
      (err) => {
        console.log('Error Fetching Data' + err);
      },
      () => {
      }
    );
  }
}
