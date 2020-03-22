import { NgModule } from "@angular/core";
import { TripsTileComponent } from "./trips-tile/trips-tile.component";
import { BlogExcerptComponent } from "./blog-excerpt/blog-excerpt.component";
import { TeamComponent } from "./team/team.component";
import { AboutExcerptComponent } from "./about-excerpt/about-excerpt.component";

@NgModule({
  declarations: [
    TeamComponent,
    TripsTileComponent,
    BlogExcerptComponent,
    AboutExcerptComponent
  ],
  exports: [
    TeamComponent,
    TripsTileComponent,
    BlogExcerptComponent,
    AboutExcerptComponent
  ]
})
export class ComponentsModule { }
