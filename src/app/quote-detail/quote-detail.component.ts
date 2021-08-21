import { Component, OnInit, Input, EventEmitter } from '@angular/core';
// import quote blueprint class
import {quote} from '..quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  // property quote to receive data from parent quote component
  @Input() quote: quote;
  @Output() seen = new EventEmitter<boolean>();

  // vote likes
  numberOfLikes: number=0;
  numerOfHates: number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
