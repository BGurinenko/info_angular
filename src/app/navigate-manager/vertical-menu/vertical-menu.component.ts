import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {

  showFiller = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}