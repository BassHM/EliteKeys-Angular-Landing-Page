import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cualidades',
  templateUrl: './cualidades.component.html',
  styleUrls: ['./cualidades.component.scss']
})
export class CualidadesComponent implements OnInit{
  dataStructure: any = {};
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
      this.http.get("/assets/data.json").subscribe(res=>{
        this.dataStructure = res;
        console.log(this.dataStructure);
      }, error => {
        console.log(error);
      })
  }
}
