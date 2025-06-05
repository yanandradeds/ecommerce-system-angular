import { Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.page';
import { HomePageComponent } from './pages/home/home.page';
import { pagesGuard } from './guards/pages.guard';



export const routes: Routes = [
    {
        path: "",
        component: AuthenticationComponent
    },
    {
        path: "home",
        component: HomePageComponent,
        canActivate: [pagesGuard]
    }
];
