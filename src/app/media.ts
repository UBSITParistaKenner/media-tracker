import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root',
})
export class Media {
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

  watchMedia = signal<any[]>([
    {
      title: 'Heneral Luna',
      episode: '1',
      season: '1',
      description: 'Philippines - Historical biopic about General Antonio Luna leading the military during the Philippine-American War.',
      status: 'Highly Recommended'
    },
    {
      title: 'Parasite',
      episode: '1',
      season: '1',
      description: 'South Korea - Dark comedy thriller about a poor family scheming to become employed by a wealthy household.',
      status: 'Masterpiece'
    },
    {
      title: 'Marry My Dead Body',
      episode: '1',
      season: '1',
      description: 'Taiwan - Supernatural action-comedy about a superstitious policeman who accidentally marries a ghost.',
      status: 'Must Watch'
    },
    {
      title: 'Farewell My Concubine',
      episode: '1',
      season: '1',
      description: 'China - Epic historical drama exploring the lives of two opera actors through decades of political turmoil.',
      status: 'Classic'
    }
  ]);
  
}
