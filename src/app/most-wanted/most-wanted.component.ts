import { Component } from '@angular/core';
import { FbiApiService } from '../service/fbi-api.service';

@Component({
  selector: 'app-most-wanted',
  imports: [],
  templateUrl: './most-wanted.component.html',
  styleUrl: './most-wanted.component.css'
})
export class MostWantedComponent {

  mostWantedList: any[] = []; 

  constructor(private fbiService: FbiApiService) { }

  ngOnInit(): void {
    this.fbiService.getMostWanted().subscribe((data: any) => {
      this.mostWantedList = data.items;  
    }, (error) => {
      console.error('Error fetching data from FBI API:', error);
    });
  }

}
