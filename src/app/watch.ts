import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root',
})
export class Watch {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/watch';

  watchList = signal<any[]>([]);

  fetchWatch() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => this.watchList.set(data));
  }

  saveWatch(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  deleteWatch(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateWatch(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
