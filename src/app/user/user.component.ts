import { Component, computed, input, Input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(()=>{
    return 'assets/users/'+this.avatar()
  })

  alertIt():void{
    alert("Hi");
  }
}

