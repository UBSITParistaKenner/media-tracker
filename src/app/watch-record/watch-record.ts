import { Component, inject } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-watch-record',
  standalone: true,
  imports: [],
  templateUrl: './watch-record.html',
  styleUrl: './watch-record.css',
})
export class WatchRecord {
  watchMedia = inject(Media);

  startEdit(item: any){
  }
}
