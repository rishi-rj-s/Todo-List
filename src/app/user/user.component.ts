import { Component, computed, EventEmitter, input, Input, Output, output} from '@angular/core';


interface User{
  id : string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input({required:true}) user !: User;
  
 @Output() select = new EventEmitter<string>();
// select = output<string>();


  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }

  alertIt():void{
    this.select.emit(this.user.id);
  }
}

