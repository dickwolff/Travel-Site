import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule { }
