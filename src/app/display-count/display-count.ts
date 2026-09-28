import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  imports: [],
  selector: 'app-display-count',
  styleUrl: './display-count.css',
  templateUrl: './display-count.html',
})
export class DisplayCount {
  constructor(public state:Counter){
    
  }
}
