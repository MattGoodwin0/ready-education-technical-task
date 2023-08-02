import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userData: IUser[] = [];
  public mailIcon = faEnvelope;
  public phoneIcon = faPhone;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (res: IUser[]) => {
        this.userData = res;
      },
      (err) => console.log('Error', err)
    );
  }

  public getLocalTime(offset: string): string {
    const [hoursStr, minutesStr] = offset.split(':');
    const offsetHours = parseInt(hoursStr, 10);
    const offsetMinutes = parseInt(minutesStr, 10);
    const offsetTotalMinutes = offsetHours * 60 + offsetMinutes;

    const utcNow = new Date();
    const bstNow = new Date(utcNow.getTime() + 60 * 60 * 1000);

    const localTime = new Date(
      bstNow.getTime() + offsetTotalMinutes * 60 * 1000
    );

    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  public sendEmail(email: string): void {
    const subject = 'Hello from Angular!';
    const body = 'This is the email body.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  }

  public telephoneLink(number: string): void {
    const telLink = `tel:${number}`;
    window.location.href = telLink;
  }
}
