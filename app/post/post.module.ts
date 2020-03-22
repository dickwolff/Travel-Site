import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PostComponent } from "./post.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostComponent]
})
export class PostModule { }
