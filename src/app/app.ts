import { Component, computed, effect, signal } from '@angular/core';
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
  data:any
  btnDisable = true
  inputReadonly = false // we changed from true to false --> property binding follows the change but 
  //interpolation doesn't 
  data1 =100
  count1 =signal(0)
  height = signal(100)
  width = signal(20)
  area = computed(()=> this.height() * this.width())
  constructor(){
    effect(()=>{
      console.log("This is data : ",this.data1); // properties cannot update here
      console.log("This is count: ", this.count1());// we know when count1 is updated 
      if(this.count1() == 10){
        this.count1.set(0) // thus we can perform any kind of action with signals - signals are reactive 
      }

      
    })
  }

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
  handleEvent(eventName:string){
   // console.log(event?.target.value); prints the input Value but event parameter is of any type 
    
    console.log(eventName); // prints event name - input, change or click
  }
  updateData(val:number, user:string){
    this.data = val
    console.log(user)
    console.log(this.sum(10,20))
  }
  sum(a:number,b:number):number{
    return a+b
  }
  handle(val: Event | PointerEvent |MouseEvent){
    console.log(val);
    
  }
  toggle(){
    this.btnDisable=!this.btnDisable
  }
  updateData1(){
    this.data1++
  }
  updateCount1(){
    this.count1.set(this.count1()+1)
  }
  handleHeight(){
    this.height.set(this.height() + 10)
  }
}
