import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'cate',
    loadChildren: () => import('./cate/cate.module').then( m => m.CatePageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'buss',
    loadChildren: () => import('./buss/buss.module').then( m => m.BussPageModule)
  },
  {
    path: 'tech',
    loadChildren: () => import('./tech/tech.module').then( m => m.TechPageModule)
  },
  {
    path: 'enter',
    loadChildren: () => import('./enter/enter.module').then( m => m.EnterPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'sci',
    loadChildren: () => import('./sci/sci.module').then( m => m.SciPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./developer/developer.module').then( m => m.DeveloperPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
