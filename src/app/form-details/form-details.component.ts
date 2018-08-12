import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  @Input() Quote:Quote;
  @Output() complete = new EventEmitter<boolean>();

  quoteDelete(deletequt:boolean) {
    this.complete.emit(deletequt);
  }


  constructor() { }

  ngOnInit() {
  }

}
