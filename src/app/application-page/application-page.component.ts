import { Component, OnInit } from '@angular/core';
import { Application } from './application';
import { APPLICATIONS } from './mock-applications';




@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

  applications = APPLICATIONS;

  constructor() { }

  ngOnInit() {
  }

}
