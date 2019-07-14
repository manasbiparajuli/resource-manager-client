import { Component } from '@angular/core';
import { NavdrawerService } from './core/services/navdrawer.service';
import { onMainContentChange } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ onMainContentChange ]
})
export class AppComponent {
  title = 'Resource Management';

  public onNavdrawerChange: boolean;

  constructor(private _navdrawerService: NavdrawerService) {
      this._navdrawerService.navDrawerState$.subscribe( res => {
        console.log(res);  
        this.onNavdrawerChange = res;
      })
  }
}
