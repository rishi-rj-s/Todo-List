import { Component, inject, Input } from '@angular/core';
import { Task } from '../tasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task !: Task;

  private taskService = inject(TaskServices)
 
 onCompletedTask(){
  this.taskService.removeTask(this.task.id)
 }
}
