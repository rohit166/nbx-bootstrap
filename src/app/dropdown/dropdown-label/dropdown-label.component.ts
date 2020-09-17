import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { find, repeatWhen, mapTo, startWith, filter} from 'rxjs/operators';

@Component({
  selector: 'app-dropdown-label',
  templateUrl: './dropdown-label.component.html',
  styleUrls: ['./dropdown-label.component.scss']
})
export class DropdownLabelComponent implements OnInit,AfterViewInit {

  constructor() { }

  // @ViewChild('menu') elem:ElementRef;

  // @HostListener('document:click', ['$event', '$event.target'])
  // hide(e){
  //   console.log(e.target);
  // }

  @ViewChild('menu') menu:ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const status = document.getElementById('dropdownMenuButton');
    const clicks$ = fromEvent(document, 'click');

    clicks$
    .pipe(
      find((event: any) => event.target.id === 'box'),
    )
    .subscribe(message => {console.log(message)});
  }

}

// dropdownMenuButton
