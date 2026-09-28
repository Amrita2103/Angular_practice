import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  imports: [],
  selector: 'app-control-count',
  styleUrl: './control-count.css',
  templateUrl: './control-count.html',
})
export class ControlCount {
  constructor(public state:Counter){
    
  }
}
