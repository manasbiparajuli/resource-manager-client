import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ErrorComponent } from './core/error/error.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { FormulaComponent } from './modules/formula/formula.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'resources', component: ResourcesComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'formula', component: FormulaComponent},
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}