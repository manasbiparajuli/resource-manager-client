import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable() 
export class NavdrawerService {

    // With this subject we can save the navigation drawer state 
    // and consume later when navigating other pages
    public navDrawerState$: Subject<boolean> = new Subject();

    constructor() { }
}