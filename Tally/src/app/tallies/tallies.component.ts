import { Component, OnInit } from '@angular/core';
import { TallyService } from '../tally.service';
import { Tally } from '../tally';

@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styles: [`
  .tallyRow:hover{
    background-color: #ff1744;
  }
  `]
})
export class TalliesComponent implements OnInit {
tallies: Tally[] = [];
newTallyName: string;
newTallyAmount: number;
newTallyQuantity: number;
newPaidAmount: number;

tallyPriceSum: number = 0;


onAddTally(){
  this.tallies.push({tallyName: this.newTallyName, tallyAmount: this.newTallyAmount, tallyQuantity: this.newTallyQuantity})
  this.tallyPriceSum = Number.parseInt(this.newTallyAmount.toString()) + Number.parseInt(this.tallyPriceSum.toString()) ;
  console.log(this.tallyPriceSum);
  this.newTallyName = '';
  this.newTallyQuantity = null;
  this.newTallyAmount = null;
  
  
}
onPaid(tally){
  this.tallyPriceSum -= Number.parseInt(this.newPaidAmount.toString());
  this.newPaidAmount = null;
  if(this.tallyPriceSum == 0){
    this.tallies = [];
  }
}
onDeleteTally(tally){
  this.tallies.splice(this.tallies.indexOf(tally), 1)
}
  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.tallies = this.tallyService.getTallies();
  }

}

