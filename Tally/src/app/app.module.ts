import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TallyService } from './tally.service';

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
