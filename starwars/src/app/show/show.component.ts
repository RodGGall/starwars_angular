import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from 'src/app/services/service.service';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() personaje: Personaje;
  @Input() load = false;
  constructor(private service: StarWarsService) { }

  ngOnInit() {
    console.log(this.personaje);
  }

}
