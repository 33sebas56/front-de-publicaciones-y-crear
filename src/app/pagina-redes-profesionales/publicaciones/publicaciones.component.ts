import { Component } from '@angular/core';
import { Route,RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { redesProfesionalesService} from '../redes-profesionales.service';
import { PublicacionesService } from './PublicacionesService';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {
  publicaciones: any[] = [];

  constructor(private publicacionesService: PublicacionesService) {}

  ngOnInit() {
    this.publicacionesService.publicaciones$.subscribe(data => {
      this.publicaciones = data.map(publicacion => ({
        ...publicacion
      }));
    });
  }
}