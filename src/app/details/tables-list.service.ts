import { Injectable } from '@angular/core';
import { Students } from '../_models/students';
import { Department } from '../_models/departments';

@Injectable({
  providedIn: 'root',
})
export class TablesListService {
  public department: Department[] = [
    new Department(0, 'FE'),
    new Department(1, 'BE'),
  ];
}
