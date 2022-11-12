import { Component } from '@angular/core';
import { BackgroudColorDirective } from './custom/backgroud-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customDirectives';
  number: number = 0;


}
