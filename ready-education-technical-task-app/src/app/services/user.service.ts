import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser, IWelcome } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IUser[]> {
    console.log('hit');
    return this.http.get('https://randomuser.me/api/?results=10').pipe(
      map((res: any) => {
        return res.results || [];
      })
    );
  }
}
