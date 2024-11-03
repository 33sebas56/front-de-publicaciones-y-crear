import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InicioPerfilService {
  private nombreSubject = new BehaviorSubject<string>('sebastian camilo papito ramos toro');
  private fotoSubject = new BehaviorSubject<string>('/lobo_con_audifonos.jpg');

  nombreUsuario$ = this.nombreSubject.asObservable();
  fotoUsuario$ = this.fotoSubject.asObservable();

  actualizarUsuario(nuevoNombre:string) {
    this.nombreSubject.next(nuevoNombre);
  }
  actualizarFoto(nuevaFoto:string) {
    this.fotoSubject.next(nuevaFoto);

  }

  constructor() { }
}
