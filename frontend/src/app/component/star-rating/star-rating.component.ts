import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mat-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input('rating') private rating: number = 3;
  @Output() ratingChange = new EventEmitter<number>()
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'primary';
  @Input() disabled: boolean = false;

  ratingArr = [];

  constructor() {
  }

  // initializes the rating array
  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
    this.rating = Math.round(this.rating);
  }

  // emits rating changed to parent component
  onClick(rating:number) {
    if (!this.disabled) {
      this.ratingChange.emit(rating);
    }
    return false;
  }

  // decides which icon to show, depending on the rating
  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
