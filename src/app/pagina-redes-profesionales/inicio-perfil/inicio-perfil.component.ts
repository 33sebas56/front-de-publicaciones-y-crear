import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { InicioPerfilService } from './inicio-perfil.service';

@Component({
  selector: 'app-inicio-perfil',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './inicio-perfil.component.html',
  styleUrl: './inicio-perfil.component.css'
})
export class InicioPerfilComponent implements OnInit{
  publicaciones: any[] = [];

  nombreUsuario: string = '';
  fotoUsuario: string = '';

  constructor (private usuarioService:InicioPerfilService){}
  ngOnInit(): void {
      this.usuarioService.nombreUsuario$.subscribe(nombre => { 
        this.nombreUsuario = nombre;
      })
      this.usuarioService.fotoUsuario$.subscribe(foto => {
        this.fotoUsuario = foto;
      })
  }
}