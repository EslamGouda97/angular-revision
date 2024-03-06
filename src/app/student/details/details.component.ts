import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Output() onHideDetails: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() studentDatails: Students = new Students(0, '', 18, 5);
  hideMe() {
    this.onHideDetails.emit(false);
  }
}
