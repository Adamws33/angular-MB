import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nameToDisplay = ''

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.nameToDisplay = window.prompt('Enter Your Name');
  }

  logout(){
    this.nameToDisplay = '';
  }
}
