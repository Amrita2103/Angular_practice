import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  username = signal('')
  constructor( public route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.username.set(params['name'])
    })

  }

}
