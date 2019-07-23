import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ErrorComponent } from './core/error/error.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { FormulaComponent } from './modules/formula/formula.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard]},
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
    { path: 'formula', component: FormulaComponent, canActivate: [AuthGuard]},
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}