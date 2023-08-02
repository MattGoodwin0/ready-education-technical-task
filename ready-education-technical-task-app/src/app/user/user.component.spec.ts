import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Gender, IUser } from '../interfaces/user.interface';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  const mockUserData: IUser[] = [
    {
      gender: 'male' as Gender,
      name: {
        title: 'Mr',
        first: 'Batur',
        last: 'Poçan',
      },
      location: {
        street: {
          number: 3530,
          name: 'Fatih Sultan Mehmet Cd',
        },
        city: 'Malatya',
        state: 'Edirne',
        country: 'Turkey',
        postcode: 40126,
        coordinates: {
          latitude: '66.0569',
          longitude: '-119.7931',
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska',
        },
      },
      email: 'batur.pocan@example.com',
      login: {
        uuid: '1b15c845-d76b-4fb9-aed7-a5a80c3667d3',
        username: 'ticklishladybug677',
        password: 'tabasco',
        salt: '2ExT9QLx',
        md5: 'c735f8c103f891f3549b76aaf5f0d4cc',
        sha1: '9899d40cbf5c6fce4b0b3cbc99425316a1542117',
        sha256:
          '8f227d794497a57ff3443071f06a3dc7c8cb324cd74a1b2770cdb15cacfd430c',
      },
      dob: {
        date: '1964-08-22T13:07:51.363Z' as unknown as Date,
        age: 58,
      },
      registered: {
        date: '2015-12-13T04:13:41.963Z' as unknown as Date,
        age: 7,
      },
      phone: '(072)-334-8297',
      cell: '(141)-346-7833',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/54.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/54.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
      },
      nat: 'TR',
    },
    {
      gender: 'male' as Gender,
      name: {
        title: 'Mr',
        first: 'Rodolfo',
        last: 'Gamboa',
      },
      location: {
        street: {
          number: 6613,
          name: 'Periférico Sur Anguiano',
        },
        city: 'Totutla',
        state: 'Jalisco',
        country: 'Mexico',
        postcode: 85535,
        coordinates: {
          latitude: '72.9564',
          longitude: '84.0230',
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown',
        },
      },
      email: 'rodolfo.gamboa@example.com',
      login: {
        uuid: '27267ace-46a5-4d55-ace7-d27334cc1c2e',
        username: 'blacktiger179',
        password: 'roberts',
        salt: 'kElosXWe',
        md5: 'ef33a448e7dd742f0d74417c987165b0',
        sha1: 'cc4a5225d1696eda8ea4996ddad7a8bf4b9be44d',
        sha256:
          'caf89581936c27ec92bbc73eaa5dafae259b85a7525751d9f99857ce57ed3602',
      },
      dob: {
        date: '1993-11-08T17:01:27.493Z' as unknown as Date,
        age: 29,
      },
      registered: {
        date: '2013-03-11T23:54:28.471Z' as unknown as Date,
        age: 10,
      },
      phone: '(620) 558 0605',
      cell: '(697) 628 2413',
      id: {
        name: 'NSS',
        value: '33 46 65 6085 6',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/63.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/63.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/63.jpg',
      },
      nat: 'MX',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      providers: [UserService, HttpClient, HttpHandler],
      declarations: [UserComponent],
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display user data from the UserService', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(mockUserData));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userData).toEqual(mockUserData);
  });

  it('should generate a mailto link when sendEmail is called', () => {
    const email = 'john@example.com';
    spyOn(window, 'open');
    component.sendEmail(email);
    const subject = encodeURIComponent('Hello from Angular!');
    const body = encodeURIComponent('This is the email body.');
    const expectedLink = `mailto:${email}?subject=${subject}&body=${body}`;
    expect(window.open).toHaveBeenCalledWith(expectedLink);
  });

  it('should generate a telephone link when telephoneLink is called', () => {
    const number = '1234567890';
    component.telephoneLink(number);
    const expectedLink = `tel:${number}`;
    expect(expectedLink).toBe('tel:1234567890');
  });
});
