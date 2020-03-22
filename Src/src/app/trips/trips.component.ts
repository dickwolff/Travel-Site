import { Component, OnInit } from "@angular/core";
import { Trip } from "../shared/domain/trip.interface";
import { PriceType } from "../shared/domain/priceType.enum";

@Component({
  templateUrl: "./trips.component.html",
  styleUrls: ["./trips.component.scss"]
})
export class TripsComponent implements OnInit {

  public trips: Trip[] = [];

  ngOnInit() {

    this.trips = [
      {
        tripId: 2020001,
        title: "Roadtrip IJsland (10 dagen)",
        price: 2000,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_7.jpg",
        summary: "Bezoek IJsland in 10 dagen."
      },
      {
        tripId: 1,
        title: "Ardennenhike (3 dagen)",
        price: 200,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_1.jpg",
        summary: "3 dagen hiken door de Belgische Ardennen."
      },
      {
        tripId: 2,
        title: "Dolomieten huttentocht (8 dgn)",
        price: 540,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_2.jpg",
        summary: "Wandel door de Italiaanse Dolomieten en overnacht in hutten."
      },
      {
        tripId: 4,
        title: "Campertour W-Amerika (20 dgn)",
        price: 2500,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_4.jpg",
        summary: "20 dagen toeren door West-Amerika met eem camperbusje."
      },
      {
        tripId: 5,
        title: "Consectetur adipisicing",
        price: 330,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_5.jpg",
        summary: "20 dagen toeren door West-Amerika met eem camperbusje."
      },
      {
        tripId: 6,
        title: "Consectetur Amet",
        price: 450,
        priceType: PriceType.PerPerson,
        imageUrl: "assets/images/img_6.jpg",
        summary: "20 dagen toeren door West-Amerika met eem camperbusje."
      },
    ];
  }
}
