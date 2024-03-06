import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
})
export class RateComponent implements OnChanges {
  @Input() rateValue: number = 1;
  rateWidth: number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    this.rateWidth = this.rateValue * 15;
  }
}
