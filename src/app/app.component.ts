import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId ?: string;  

  onSelect(id:string){
    alert('Selected User with ID: '+id);
  }

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectUserId)!;
  }
  
  onSelectedUser(id:string){
    this.selectUserId = id;
  }
}
