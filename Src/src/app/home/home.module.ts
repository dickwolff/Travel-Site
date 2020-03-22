import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { ComponentsModule } from "../shared/components/components.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
