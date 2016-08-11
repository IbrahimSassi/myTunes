import { RouterConfig } from '@angular/router';
import { LoginComponent,RegistrationComponent } from './user';
import { AlbumComponent,AlbumsComponent } from './music';
import { HeaderComponent,FooterComponent,WelcomeComponent,PaginationComponent,SearchComponent } from './shared';

export const routes: RouterConfig = [
    { path:'',component:WelcomeComponent },
    { path :'/albums',component: AlbumsComponent},
    { path : '**', redirectTo: ''},
    { path :'/album',component: AlbumComponent},
    { path :'/login',component: LoginComponent},
    { path :'/RegistrationComponent',component: RegistrationComponent},


]
