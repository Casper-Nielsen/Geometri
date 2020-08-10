import { Component } from '@angular/core';
import { Figure } from './figure';
import { Cube } from './cube';
import { Rectangle } from './rectangle';
import { Parallelogram } from './parallelogram';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'h3-geometri';
  test : Figure;

  public createCube(side : number){
    let cube : Cube = new Cube();
    cube.Side = side;
    this.test = cube;
  }
  public createRectangle(width : number, height : number){
    let rectangle : Rectangle = new Rectangle();
    rectangle.Width = width;
    rectangle.Height = height;
    this.test = rectangle;
  }
  public createParallelogram(width : number, height : number){
    let parallelogram : Parallelogram = new Parallelogram();
    parallelogram.Width = width;
    parallelogram.Height = height;
    this.test = parallelogram;
  }
}
