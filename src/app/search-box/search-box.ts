import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-box',
  styles: `.search-box{width:300px}`,
  template: ` <p>
  <input class = 'search-box' type = 'text' placeholder = 'start type'>
  </p> `,
 
})
export class SearchBox {}
