import { Component, OnInit } from "@angular/core";
import { Trip } from "../shared/domain/trip.interface";

@Component({
  templateUrl: "./trips.component.html",
  styleUrls: ["./trips.component.scss"]
})
export class TripsComponent implements OnInit {

  public trips: Trip[] = [];

  ngOnInit() {

    this.trips = [
      {
        tripId: 1,
        title: "Dignissimos debitis",
        price: 200,
        imageUrl: "assets/images/img_1.jpg"
      },
      {
        tripId: 2,
        title: "Consectetur adipisicing",
        price: 390,
        imageUrl: "assets/images/img_2.jpg"
      },
      {
        tripId: 3,
        title: "Temporibus aperiam",
        price: 180,
        imageUrl: "assets/images/img_3.jpg"
      },
      {
        tripId: 4,
        title: "Expedita fugiat",
        price: 600,
        imageUrl: "assets/images/img_4.jpg"
      },
      {
        tripId: 5,
        title: "Consectetur adipisicing",
        price: 330,
        imageUrl: "assets/images/img_5.jpg"
      },
      {
        tripId: 6,
        title: "Consectetur Amet",
        price: 450,
        imageUrl: "assets/images/img_6.jpg"
      },
    ];
  }
}
