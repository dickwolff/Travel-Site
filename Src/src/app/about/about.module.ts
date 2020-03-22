import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { ComponentsModule } from "../shared/components/components.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
