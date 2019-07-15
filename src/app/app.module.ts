import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavDrawerComponent } from './core/nav-drawer/nav-drawer.component';

import { NavdrawerService } from './core/services/navdrawer.service';
import { LoginComponent } from './modules/login/login.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { FormulaComponent } from './modules/formula/formula.component';
import { ErrorComponent } from './core/error/error.component';
import { RegisterComponent } from './modules/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NavDrawerComponent,
    LoginComponent,
    ResourcesComponent,
    ProjectsComponent,
    FormulaComponent,
    ErrorComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    CustomMaterialModule
  ],
  providers: [ NavdrawerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
