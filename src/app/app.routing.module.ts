import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { TripsComponent } from "./trips/trips.component";
import { TripComponent } from "./trip/trip.component";
import { BlogComponent } from "./blog/blog.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    path: "trips",
    children: [
      {
        path: ":tripId",
        component: TripComponent
      },
      {
        path: "**",
        component: TripsComponent,
      }
    ]
  },
  {
    component: AboutComponent,
    path: "about"
  },
  {
    path: "blog",
    children: [
      {
        path: ":postId",
        component: PostComponent
      },
      {
        path: "**",
        component: BlogComponent
      }
    ]
  },
  {
    component: ContactComponent,
    path: "contact"
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
