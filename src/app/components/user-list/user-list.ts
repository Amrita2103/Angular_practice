import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/user-data-type';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  usersData = signal<users[] | undefined>(undefined)
  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.usersData.set(data)
    })
  }
}
