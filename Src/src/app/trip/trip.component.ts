import { Component, OnInit } from "@angular/core";
import { TripDay } from "../shared/domain/tripDay.interface";
import { Trip } from "../shared/domain/trip.interface";
import { PriceType } from "../shared/domain/priceType.enum";

@Component({
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.scss"]
})
export class TripComponent implements OnInit {

  public trip: Trip;
  public days: TripDay[] = [];

  ngOnInit() {

    this.trip = {
      tripId: 4,
      title: "Campertour W-Amerika (20 dgn)",
      price: 2500,
      priceType: PriceType.PerPerson,
      imageUrl: "assets/images/img_4.jpg",
      summary: "20 dagen toeren door West-Amerika met eem camperbusje."
    };

    this.days = [
      {
        dayId: 1,
        tripId: 1,
        day: 1,
        date: new Date(),
        fromTo: "Melbourne - Adeleide",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facere sed non necessitatibus pariatur, dignissimos rem hic eligendi assumenda quasi, sequi "
          + "voluptatum voluptatibus praesentium dolorum! Vero necessitatibus nemo cumque, a ut tempore. Accusamus perferendis tenetur molestiae soluta architecto consequuntur "
          + "laudantium, iusto sed, asperiores necessitatibus molestias libero deserunt mollitia quas consequatur.</p><p>Totam sunt nam, quos cum officiis, ab incidunt "
          + "doloribus delectus, quas quam excepturi. Id, eaque placeat distinctio consectetur enim reiciendis alias pariatur atque tempora ea ab dolorem earum exercitationem "
          + "libero repellat modi voluptate! Fugit architecto magnam ea sunt minima asperiores. Numquam illum, error expedita vel debitis excepturi, voluptatem laborum "
          + "reprehenderit!</p><p>Quo pariatur dolores commodi quas, fugit tenetur quam aperiam veniam. Veniam dolorum ipsum facilis sint sunt, sequi, ex similique numquam "
          + "neque sed reprehenderit veritatis distinctio dolorem debitis, ducimus explicabo dolore. Cumque placeat beatae sint laboriosam molestias nobis possimus porro "
          + "necessitatibus est delectus, asperiores at, sed aspernatur perferendis temporibus, alias voluptatibus.</p><p>Vitae consectetur dolor delectus ipsa rem, eos. "
          + "Veritatis vero facilis, illo deserunt in aliquam dolore ex consequuntur facere laborum tempore provident voluptate porro voluptatem suscipit iure praesentium sint "
          + "temporibus, reprehenderit. Nisi reprehenderit molestias sed obcaecati nostrum, dolor illum, debitis quis, quisquam eveniet totam. Eaque, nobis. Tenetur deleniti "
          + "amet, atque fugiat.</p><p>Illo a voluptate nam amet explicabo officia doloribus? At harum mollitia doloremque deserunt repellat perspiciatis in aliquam quos "
          + "cumque, deleniti exercitationem. Placeat soluta laboriosam ullam dicta ducimus, in atque temporibus molestias distinctio dolorum, tenetur rerum velit cumque "
          + "asperiores id earum corporis, neque officiis libero voluptatem! Commodi nostrum iste tenetur, ea.</p>",
        images: [
          "assets/images/img_4.jpg"
        ]
      },
      {
        dayId: 2,
        tripId: 1,
        day: 2,
        date: new Date(),
        fromTo: "Adeleide - Melbourne",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facere sed non necessitatibus pariatur, dignissimos rem hic eligendi assumenda quasi, sequi "
          + "voluptatum voluptatibus praesentium dolorum! Vero necessitatibus nemo cumque, a ut tempore. Accusamus perferendis tenetur molestiae soluta architecto consequuntur "
          + "laudantium, iusto sed, asperiores necessitatibus molestias libero deserunt mollitia quas consequatur.</p><p>Totam sunt nam, quos cum officiis, ab incidunt "
          + "doloribus delectus, quas quam excepturi. Id, eaque placeat distinctio consectetur enim reiciendis alias pariatur atque tempora ea ab dolorem earum exercitationem "
          + "libero repellat modi voluptate! Fugit architecto magnam ea sunt minima asperiores. Numquam illum, error expedita vel debitis excepturi, voluptatem laborum "
          + "reprehenderit!</p><p>Quo pariatur dolores commodi quas, fugit tenetur quam aperiam veniam. Veniam dolorum ipsum facilis sint sunt, sequi, ex similique numquam "
          + "neque sed reprehenderit veritatis distinctio dolorem debitis, ducimus explicabo dolore. Cumque placeat beatae sint laboriosam molestias nobis possimus porro "
          + "necessitatibus est delectus, asperiores at, sed aspernatur perferendis temporibus, alias voluptatibus.</p><p>Vitae consectetur dolor delectus ipsa rem, eos. "
          + "Veritatis vero facilis, illo deserunt in aliquam dolore ex consequuntur facere laborum tempore provident voluptate porro voluptatem suscipit iure praesentium sint "
          + "temporibus, reprehenderit. Nisi reprehenderit molestias sed obcaecati nostrum, dolor illum, debitis quis, quisquam eveniet totam. Eaque, nobis. Tenetur deleniti "
          + "amet, atque fugiat.</p><p>Illo a voluptate nam amet explicabo officia doloribus? At harum mollitia doloremque deserunt repellat perspiciatis in aliquam quos "
          + "cumque, deleniti exercitationem. Placeat soluta laboriosam ullam dicta ducimus, in atque temporibus molestias distinctio dolorum, tenetur rerum velit cumque "
          + "asperiores id earum corporis, neque officiis libero voluptatem! Commodi nostrum iste tenetur, ea.</p>",
        images: [
          "assets/images/img_3.jpg"
        ]
      }
    ];
  }
}
