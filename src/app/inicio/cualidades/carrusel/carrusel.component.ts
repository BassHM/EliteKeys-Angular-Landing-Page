import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgbCarousel],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent implements OnInit{
  dataStructure: any = {};
  showNavigationArrows = false; 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get("/assets/teclados.json").subscribe(res=>{
      this.dataStructure = res;
      console.log(this.dataStructure);
    }, error => {
      console.log(error);
    })
  }
}
