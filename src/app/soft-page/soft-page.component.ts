import { Component, OnInit } from '@angular/core';
import { Soft } from './soft';
import { SOFT } from './mock-soft';

@Component({
  selector: 'app-soft-page',
  templateUrl: './soft-page.component.html',
  styleUrls: ['./soft-page.component.scss']
})
export class SoftPageComponent implements OnInit {

  soft = SOFT;
  
  constructor() { }

  ngOnInit() {
  }

}
