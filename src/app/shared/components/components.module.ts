import { NgModule } from "@angular/core";
import { TripsTileComponent } from "./trips-tile/trips-tile.component";
import { BlogExcerptComponent } from "./blog-excerpt/blog-excerpt.component";
import { TeamComponent } from "./team/team.component";
import { AboutExcerptComponent } from "./about-excerpt/about-excerpt.component";
import { CtaComponent } from "./cta/cta.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    CtaComponent,
    TeamComponent,
    TripsTileComponent,
    BlogExcerptComponent,
    AboutExcerptComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    CtaComponent,
    TeamComponent,
    TripsTileComponent,
    BlogExcerptComponent,
    AboutExcerptComponent
  ]
})
export class ComponentsModule { }
