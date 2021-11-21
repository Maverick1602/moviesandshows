import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './GuardService';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { TopshowsComponent } from './topshows/topshows.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'topmovies', component : TopmoviesComponent},
  {path : 'topshows', component : TopshowsComponent},
  {path: '**', redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
