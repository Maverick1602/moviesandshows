import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConnectService } from './connect.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component'
import { GuardService } from './GuardService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { TopshowsComponent } from './topshows/topshows.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenderPipe,
    RegisterComponent,
    TopmoviesComponent,
    TopshowsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [ConnectService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
