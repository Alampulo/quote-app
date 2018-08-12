import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title='Quotes';
  quotes = [
    new Quote("", "", "", 0, 0, new Date())
  ]

  addNewQuote(quote) {
    quote.postingDate = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
  }

  deleteQuote(complete,index) {
    if(complete) {
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
   this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
