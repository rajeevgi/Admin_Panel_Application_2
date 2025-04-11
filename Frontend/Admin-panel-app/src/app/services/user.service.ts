import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.userUrl}/addUser`, data, {
      withCredentials: true,
    });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.userUrl}/getAllUsers`, {
      withCredentials: true,
    });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.userUrl}/getUserById/${id}`, {
      withCredentials: true,
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/deleteUser/${id}`, {
      withCredentials: true,
    });
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.userUrl}/updateUser/${id}`, data, {
      withCredentials: true,
    });
  }
}
