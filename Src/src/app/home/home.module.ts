import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
