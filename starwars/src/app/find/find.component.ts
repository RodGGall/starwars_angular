import { Component, OnInit, ViewChild } from '@angular/core';
import { StarWarsService } from '../services/service.service';
import { ShowComponent } from '../show/show.component';
import { Personaje } from '../models/personaje';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private service: StarWarsService) { }
  nombre: string;
  @ViewChild(ShowComponent) show: ShowComponent;
  ngOnInit() {
    console.log(this.show);
  }

  search() {
    this.service.getPersonaje(this.nombre).subscribe(resp => {
      console.log(resp.results[0]);
      this.show.load = false;
      this.show.personaje = resp.results[0];
      this.service.getVarios(resp.results[0].homeworld).subscribe( planet => {
        this.show.personaje.homeworld = planet.name;
      });
      this.service.getVarios(resp.results[0].species[0]).subscribe( specie => {
        this.show.personaje.species = specie;
      });
      this.service.getVarios(resp.results[0].vehicles[0]).subscribe( vehiculo => {
        this.show.personaje.vehicles = vehiculo;
      });
      this.service.getVarios(resp.results[0].starships[0]).subscribe( nave => {
        this.show.personaje.starships = nave;
      });
    });
    this.show.load = true;
  }
}
