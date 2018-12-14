import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { StarWarsService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: StarWarsService, private route: ActivatedRoute) {
   }

  indexPage = 1;
  personajes: Personaje[];
  order: string;
  load = true;
  ngOnInit() {
    this.personajes = [];
    this.getOrder();
    this.getPersonajes();
  }

  getOrder() {
    this.route.queryParams.subscribe(params => {
      this.order = params.order;
    });
  }

  orderBy(list: Personaje[]) {
    switch (this.order) {
      case 'nombre':
      list.sort((dato1, dato2): number => {
        if (dato1.name < dato2.name) { return -1; }
        if (dato1.name > dato2.name) { return 1; }
        return 0;
      });
      this.personajes = list;
      break;
      case 'peso':
      list.sort((dato1, dato2): number => {
        if (dato1.mass < dato2.mass) { return -1; }
        if (dato1.mass > dato2.mass) { return 1; }
        return 0;
      });
      list.sort((dato1, dato2): number => {
        if (Number(dato1.mass) < Number(dato2.mass)) { return -1; }
        if (Number(dato1.mass) > Number(dato2.mass)) { return 1; }
        return 0;
      });
      this.personajes = list;
      break;
      case 'altura':
      list.sort((dato1, dato2): number => {
        if (dato1.height < dato2.height) { return -1; }
        if (dato1.height > dato2.height) { return 1; }
        return 0;
      });
      list.sort((dato1, dato2): number => {
        if (Number(dato1.height) < Number(dato2.height)) { return -1; }
        if (Number(dato1.height) > Number(dato2.height)) { return 1; }
        return 0;
      });
      this.personajes = list;
      break;
    }
  }

  getPersonajes() {
    for (let i = 1 ; i < 10 ; i++) {
      this.service.getPersonajes(i).subscribe( resp => {
        this.personajes = this.personajes.concat(resp.results);
        this.orderBy(this.personajes);
        this.load = false;
      });
    }
    // this.orderBy(this.personajes);
  }
}
