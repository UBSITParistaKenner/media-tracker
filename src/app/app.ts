import { Component, signal } from '@angular/core';
import { WatchForm } from './watch-form/watch-form';
import { WatchRecord } from './watch-record/watch-record';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [WatchForm, WatchRecord],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('media-tracker');
}
