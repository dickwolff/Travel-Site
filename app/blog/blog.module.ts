import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
