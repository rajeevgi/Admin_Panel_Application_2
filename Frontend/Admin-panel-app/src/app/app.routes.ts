import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { userGuard } from './gurad/user.guard';

export const routes: Routes = [
    // Default Route
    {
        path: '',
        redirectTo: 'app-login',
        pathMatch: 'full'
    },

    {
        path: 'app-login',
        component:LoginComponent
    },

    {
        path: 'app-register',
        component:RegisterComponent
    },

    {
        path: 'app-navbar',
        component:NavbarComponent,
        canActivate:[userGuard]
    },

    {
        path: 'app-footer',
        component:FooterComponent,
        canActivate:[userGuard]
    },


    {
        path: '',
        component:LayoutComponent,
        children: [
            {
                path:'app-dashboard',
                component:DashboardComponent,
                canActivate:[userGuard]
            },

            {
                path:'app-users-form',
                component:UsersFormComponent,
                canActivate:[userGuard]
            },

            {
                path:'app-users-form/:id',
                component:UsersFormComponent,
                canActivate:[userGuard]
            }
        ]
    },

    {
        path:'**',
        redirectTo:'app-login'
    }

];
