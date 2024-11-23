import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';

export const routes: Routes = [
    {path:'',title:'Pagina de bienvenida' ,component: WelcomeComponent},
    {path:'list-users', title: 'Listar usuarios', component: ListUsersComponent}
];
