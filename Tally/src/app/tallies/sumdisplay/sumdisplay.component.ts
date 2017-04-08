import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sumdisplay',
  templateUrl: './sumdisplay.component.html',
  styleUrls: ['./sumdisplay.component.css']
})
export class SumdisplayComponent implements OnInit {
  @Input() price: Number;
  @Input() length: Number;
  @Input() quantity: Number;
  constructor() { }

  ngOnInit() {
  }

}
