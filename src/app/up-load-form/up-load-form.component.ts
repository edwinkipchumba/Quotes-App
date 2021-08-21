import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import from quote blueprint class for two-way data binding
 import {quote} from '../quote/quote'

@Component({
  selector: 'app-up-load-form',
  templateUrl: './up-load-form.component.html',
  styleUrls: ['./up-load-form.component.css']
})
export class UpLoadFormComponent implements OnInit {

// create newQuote and assign quote class
  newQuote = new quote (0, "", "", "", new Date());
  @Output () addQuote = new EventEmitter<quote>();

  // quote submit button
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(){
  }

}
