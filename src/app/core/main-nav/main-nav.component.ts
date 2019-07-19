import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav} from '@angular/material';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent implements OnInit{

    @Input() sidenav: MatSidenav;
    
    constructor() {};

    ngOnInit() {};
}