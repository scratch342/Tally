import { Component, OnInit } from '@angular/core';
import { TallyService } from '../tally.service';
import { Tally } from '../tally';

@Component({
  selector: 'app-tallies',
  templateUrl: './tallies.component.html',
  styles: [`
  span.glyphicon.glyphicon-trash:hover{
    background-color: red;
  }
  `]
})
export class TalliesComponent implements OnInit {
tallies: Tally[] = [];
newTallyName: string;
newTallyAmount: number;
newTallyQuantity: number;
private rice = 200;
private riceAmount: number;
private soup = 350;
private soupAmount: number;
private gari = 100;
private gariAmount: number;

onAddTally(){
  if(this.newTallyName === "Rice"){
    this.riceAmount = this.rice * this.newTallyQuantity;
    this.newTallyAmount = this.riceAmount;
  }
  if(this.newTallyName === "Soup"){
    this.soupAmount = this.soup * this.newTallyQuantity;
    this.newTallyAmount = this.soupAmount;
  }
  if(this.newTallyName === "Gari"){
    this.gariAmount = this.gari * this.newTallyQuantity;
    this.newTallyAmount = this.gariAmount;
  }
  
  this.tallies.push({tallyName: this.newTallyName, tallyAmount: this.newTallyAmount, tallyQuantity: this.newTallyQuantity})
  this.newTallyName = '';
  this.newTallyQuantity = null;
  
}
onDeleteTally(tally){
  this.tallies.splice(this.tallies.indexOf(tally), 1)
}
  constructor(private tallyService: TallyService) { }

  ngOnInit() {
    this.tallies = this.tallyService.getTallies();
  }

}
