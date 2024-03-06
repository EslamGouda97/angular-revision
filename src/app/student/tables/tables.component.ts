import { Component } from '@angular/core';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent {
  // public name: string = 'Eslam';
  // public inputValue: string = '';
  // public age: number = 6;
  // public imageSrc: string = 'assets/317kmj2PkqS.jpg';
  // public writeValue(e: any): void {
  //   this.age = e.target.value;
  // }
  // public writeValueWithTname(value: any): void {
  //   this.age++;
  //   this.inputValue = value;
  // }
  // studentDegree: number = 0;
  students: Students[] = [
    new Students(0, 'Eslam', 26, 5),
    new Students(1, 'Ahmed', 33, 4),
    new Students(2, 'Ali', 25, 4),
    new Students(3, 'Asmaa', 12, 3),
    new Students(4, 'Alaa', 8, 2),
  ];
  disabled: boolean = false;
  selectedDatails: Students = new Students(0, '', 18, 5);
  show(id: number) {
    for (let index = 0; index < this.students.length; index++) {
      const element = this.students[index];
      if (element.id === id) {
        this.selectedDatails = this.students[index];
        this.disabled = true;
      }
    }
  }
  add(n: Students) {
    this.students.push(new Students(n.id, n.name, n.age, n.rate));
  }
  changeRate() {
    this.students[0].rate = 2;
  }
}
