import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { ImageOfDay } from '../../core/models/ImageOfDay';


@Component({
  selector: 'app-image-day',
  templateUrl: './image-day.component.html',
  styleUrls: ['./image-day.component.scss']
})
export class ImageDayComponent implements OnInit {

  imageData: ImageOfDay;
  day: string;
  month: string;
  year: string;
  mydate = new Date();

  constructor(
    private api: ApiService
  ) {
    this.day = this.mydate.getDate().toString().padStart(2, '0');
    this.month = (this.mydate.getMonth() + 1).toString().padStart(2, '0');
    this.year = this.mydate.getFullYear().toString();
    this.getImageDay(this.day, this.month, this.year);
   }

  ngOnInit(): void {
  }

  getImageDay(day: string, month: string, year: string){
    this.api.getImageOfDay(`${year}-${month}-${day}`)
    .subscribe(result => {
      this.imageData = result;
    },
    error => {
      console.log(error);
      this.imageData = null;
    });
  }

  openModal(url: string){
    window.open(url, '_blank');
  }

}
