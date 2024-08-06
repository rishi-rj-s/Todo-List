import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type singleTask } from './tasks.model';
import { TaskServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent  {
  @Input() userId!:string;
  @Input() name!:string;
  isAddingTask : boolean = false;

  constructor( private tasksService: TaskServices){}

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompletedTask(id:string){
    return 
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
