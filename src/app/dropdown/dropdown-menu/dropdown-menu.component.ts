import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  active:boolean = false;

  constructor() { }

  
  ngOnInit(): void {
  }

  toggle()
  {
    this.active = !this.active;
  }

}
