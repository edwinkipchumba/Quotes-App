import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    //  display array quote
  quote:quote[]=[
    new quote(1, 'one, As far as is humanly possible, when you look at a design, it should be self-evident and Obvious.Krug’s First Law of Usability', new Date(2021,08,20)),
    new quote(2, 'Making every page or screen self-evident is like having good lighting in a store', new Date(2021,07,03))
  ];
    
  // show logic
  details(index){
    this.quote[index].showDetail = !this.quote[index].showDetail;
  }

  // emmitting events
  addAquote(quote){
    let allQouteLength = this.quote.length;
    quote.id = allQuoteLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quote.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
