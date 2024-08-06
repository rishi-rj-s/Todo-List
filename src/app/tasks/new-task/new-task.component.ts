import { Component, EventEmitter, inject, Input, input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type singleTask } from '../tasks.model';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  private tasksService = inject(TaskServices)

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    },this.userId);
    this.close.emit();
  }
}
