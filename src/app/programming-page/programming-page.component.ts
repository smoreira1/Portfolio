import { Component, OnInit } from '@angular/core';
import { Programming } from './programming';
import { PROGRAMMING } from './mock-programming';

@Component({
  selector: 'app-programming-page',
  templateUrl: './programming-page.component.html',
  styleUrls: ['./programming-page.component.scss']
})
export class ProgrammingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
