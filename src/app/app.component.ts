import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  Router = 'myWork';
  Router2 = 'myWork';
  title = 'RomicevSAJTTT';

  MenjacRoutera() {
    if (this.Router === 'myWork') {
      this.Router = '';
      this.Router2 = '<-- FlxpBeats';
    } else {
      this.Router = 'myWork';
      this.Router2 = 'myWork';
    }
  }
}
