import { Component, OnInit } from '@angular/core';
import { onNavdrawerChange, animateText} from '../../shared/animations/animations';
import { NavdrawerService } from '../services/navdrawer.service'; 

interface SideMenuItems {
    name: string;
    icon: string;
    link: string;    
}

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
  animations: [onNavdrawerChange, animateText]
})

export class NavDrawerComponent implements OnInit {

    public navdrawerState: boolean = false;
    public linkText: boolean = false;

    public sideMenuItems: SideMenuItems[] = [
        {name: 'Resources', link: '/resources', icon:'category'},
        {name: 'Projects', link: '/projects', icon:'ballot'},
        {name: 'Formula', link: '/formula', icon:'table_chart'}
    ]

    constructor(private _navDrawerService: NavdrawerService) { }

    ngOnInit() {}

    onNavdrawerToggle() {
        this.navdrawerState = !this.navdrawerState;

        setTimeout(() => {
            this.linkText = this.navdrawerState;
        }, 200);
        this._navDrawerService.navDrawerState$.next(this.navdrawerState);
    }
}