import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { FormsModule } from '@angular/forms';
import { SearchBox } from './search-box/search-box';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';

@Component({
  imports: [CommonModule, RouterOutlet, Profile, FormsModule, SearchBox, DisplayCount,ControlCount, TrimTextPipe, RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Hello Angular');
  title1 = " code step by step"
  title2 = signal(" i need a water bottle ")
  amount = 4567893
  newData = signal({name:"Amrita", age:23, email: " amrita@gmail.com"})
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
  data5 : WritableSignal<string |number | boolean> = signal<string|number|boolean>("amrita") // data type of value stored inside the signal
  users:WritableSignal<string[]> = signal(['amrita', 'priya', 'peter'])
  name1:WritableSignal<string> = signal('')
  isLogin = signal(true)
  users9 = signal(["Amrita", "aakash", "diya", "riya", "suhani"])
  age =20
  
  userData3 = signal({
    name: "AMRITA",
    age: 23,
    email: "amrita@gmail.com"
  })
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
  handleData5(){
   this.data5.set(true)
  }
  handleUsers(){
    this.users.update((item) => [...item, "bruce"])
    console.log(this.users());
    
  }
  resetValue(){
    this.name1.set("Amrita")
  }
  setValue(val:string){
    this.name1.set(val)
  }
  handleLogin(status:boolean){
    this.isLogin.set(status)
  }
  updateData3(key:string, val:string){
    
      this.userData3.update((item) => ({...item, [key]:val}))
    
  }
}
