import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './GuardService';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { TopshowsComponent } from './topshows/topshows.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CastdetailsComponent } from './castdetails/castdetails.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'topmovies', component : TopmoviesComponent},
  {path : 'topshows', component : TopshowsComponent},
  {path : 'details', component : DetailsComponent},
  {path : 'search/:movie/:ad', component : SearchComponent},
  {path : 'showsimilar', component : SearchComponent},
  {path : 'showcast/:id', component : SearchComponent},
  {path : 'castdetails/:id', component : CastdetailsComponent},
  {path: '**', redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
