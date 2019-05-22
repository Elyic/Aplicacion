import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registro', loadChildren: './Paginas/registro/registro.module#RegistroPageModule' },
  { path: 'inicio', loadChildren: './Paginas/inicio/inicio.module#InicioPageModule' },  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
