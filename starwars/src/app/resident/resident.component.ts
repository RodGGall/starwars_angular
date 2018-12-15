import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { StarWarsService } from '../services/service.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {
  indexPage = 1;
  personajes: Personaje[];
  planetas = [];
  load = true;
  constructor(private service: StarWarsService) { }

  ngOnInit() {
    this.personajes = [];
    this.getPlanetas();
  }


  getPlanetas() {
    for (let i = 1; i < 8; i++) {
      this.service.getPlanetas(i).subscribe( resp => {
        this.planetas = this.planetas.concat(resp.results);
        this.getPersonajes();
      });
    this.load = false;
    }
  }

  getPersonajes() {
    console.log('aqui');
    this.planetas.forEach( planeta => {
      planeta.residents.forEach(residente => {
        this.service.getVarios(residente).subscribe( resp => {
          resp.homeworld = planeta.name;
          this.personajes.push(resp);
        });
      });
    });
  }

}
