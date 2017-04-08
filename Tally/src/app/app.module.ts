import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { TallyService } from './tally.service';
import { SumdisplayComponent } from './tallies/sumdisplay/sumdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    SumdisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
