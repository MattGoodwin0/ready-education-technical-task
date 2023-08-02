import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public mailIcon = faEnvelope;
  public phoneIcon = faPhone;
  public userData: any = [];

  ngOnInit(): void {
    this.userData = [
      {
        name: { first: 'John', last: 'Doe', title: 'Mr/Ms' },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        },
        location: { city: 'New York' },
      },
      {
        name: { first: 'Alice', last: 'Smith', title: 'Mr/Ms' },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        },
        location: { city: 'Los Angeles' },
      },
      {
        name: { first: 'Michael', last: 'Johnson', title: 'Mr/Ms' },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
        },
        location: { city: 'Chicago' },
      },
      {
        name: { first: 'Emily', last: 'Williams', title: 'Mr/Ms' },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/4.jpg',
        },
        location: { city: 'Houston' },
      },
      {
        name: { first: 'Daniel', last: 'Brown', title: 'Mr/Ms' },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
        },
        location: { city: 'San Francisco' },
      },
    ];
  }
}
