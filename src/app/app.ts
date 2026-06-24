import { Component, signal } from '@angular/core';
import { WatchForm } from './watch-form/watch-form';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [WatchForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('media-tracker');
}
