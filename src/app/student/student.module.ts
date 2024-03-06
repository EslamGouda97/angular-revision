import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TablesComponent } from './tables/tables.component';
import { DetailsComponent } from './details/details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TablesComponent,
    DetailsComponent,
    DetailsComponent,
    AddStudentComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TablesComponent, FormsModule, DetailsComponent],
})
export class StudentModule {}
