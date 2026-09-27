import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet, Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Hello Angular');
  name ="Amrita Priyadarsini"
  email = "priyadarsiniamrita832@gmail.com"
  count=0
  addNumbers(a:number, b:number){
    return a+b;
  }
  callMe(){
    alert("Hello Angular Practice !!")
  }
  counter(action:string){
    if(action == "plus")
    this.count++ ;
    else
     this.count>0 && this.count-- ;
    console.log(this.count);
    // this.showUserName()
  }
  showUserName(){
    console.log("Hello");
  }
}
