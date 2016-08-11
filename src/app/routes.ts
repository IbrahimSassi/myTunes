import { RouterConfig } from '@angular/router';
import { LoginComponent } from './user/login.component';
import { RegistrationComponent } from './user/registration.component';
import { AlbumComponent, } from './music/album.component';
import { AlbumsComponent } from './music/albums.component';
import { HeaderComponent,FooterComponent,WelcomeComponent,PaginationComponent,SearchComponent } from './shared';

export const routes: RouterConfig = [
    { path:'',component:WelcomeComponent },
    { path :'albums',component: AlbumsComponent },
    { path :'album',component: AlbumComponent},
    { path :'login',component: LoginComponent},
    { path :'registration',component: RegistrationComponent},
        { path : '**', redirectTo: ''},



]
