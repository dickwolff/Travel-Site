import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./shared/components/components.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { TripsModule } from "./trips/trips.module";
import { TripModule } from "./trip/trip.module";
import { BlogModule } from "./blog/blog.module";
import { PostModule } from "./post/post.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BlogModule,
    HomeModule,
    PostModule,
    TripModule,
    AboutModule,
    TripsModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
