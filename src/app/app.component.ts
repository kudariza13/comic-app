import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'comic-app';
  public listaComic:any = [];
  constructor(private RestService:RestService){}
  ngOnInit(): void {
    this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://xkcd.com/info.0.json`)
    .subscribe(respuesta => {
      this.listaComic = [respuesta];
      console.log(respuesta);
    })
  }

}
