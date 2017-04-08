import { Injectable } from '@angular/core';
import { Tally } from './tally';

@Injectable()
export class TallyService {
    
private tallies: Tally[] = [];

  constructor() { }
    getTallies(){
        return this.tallies;
    }
    
}
