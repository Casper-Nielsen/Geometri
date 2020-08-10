import { Component } from '@angular/core';
import { Figure } from './figure';
import { Cube } from './cube';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h3-geometri';
  test : Figure = new Cube
}
