import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TripsComponent } from "./trips.component";
import { ComponentsModule } from "../shared/components/components.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    TripsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [TripsComponent]
})
export class TripsModule { }
