import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TripComponent } from "./trip.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    TripComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [TripComponent]
})
export class TripModule { }
