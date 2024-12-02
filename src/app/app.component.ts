import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostWantedComponent } from './most-wanted/most-wanted.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostWantedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fbi-api';
}
