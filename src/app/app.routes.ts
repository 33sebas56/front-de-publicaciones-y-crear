import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicacionesComponent } from './pagina-redes-profesionales/publicaciones/publicaciones.component';
import { CrearPublicacionesComponent } from './pagina-redes-profesionales/crear-publicaciones/crear-publicaciones.component';
import { InicioPerfilComponent } from './pagina-redes-profesionales/inicio-perfil/inicio-perfil.component';
import { Routes } from '@angular/router';

 export const routes: Routes = [
  { path: '', component:InicioPerfilComponent },
  { path: 'crearPublicaciones', component:CrearPublicacionesComponent }, 
  { path: 'publicaciones', component: PublicacionesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }