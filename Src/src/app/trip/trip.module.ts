import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TripComponent } from "./trip.component";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [
    TripComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [TripComponent]
})
export class TripModule { }
