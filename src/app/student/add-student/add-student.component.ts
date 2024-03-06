import { Component, EventEmitter, Output } from '@angular/core';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  @Output() onAddStudent: EventEmitter<Students> = new EventEmitter<Students>();
  newStudent: Students = new Students(0, '', 20, 5);
  save() {
    this.onAddStudent.emit(this.newStudent);
  }
}
