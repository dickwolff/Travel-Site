import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
