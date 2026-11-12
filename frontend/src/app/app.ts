import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recepcion } from './features/recepcion/recepcion';

@Component({
  imports: [RouterOutlet, Recepcion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SISKEVA');
}
