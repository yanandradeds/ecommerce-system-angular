import { Routes } from '@angular/router';
import {  AuthenticationPage } from './pages/authentication/authentication.page';
import { HomePage } from './pages/home/home.page';
import { pagesGuard } from './guards/pages.guard';



export const routes: Routes = [
    {
        path: "",
        component: AuthenticationPage
    },
    {
        path: "home",
        component: HomePage,
        canActivate: [pagesGuard]
    }
];
