import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent } from './user/login.component';
import { RegistrationComponent } from './user/registration.component';
import { AlbumComponent, } from './music/album.component';
import { AlbumsComponent } from './music/albums.component';
import { HeaderComponent,FooterComponent,WelcomeComponent,PaginationComponent,SearchComponent } from './shared';
@Component({
  moduleId: module.id,
  directives: [
    ...ROUTER_DIRECTIVES,
    LoginComponent,
    RegistrationComponent,
    AlbumComponent,
    AlbumsComponent,
    WelcomeComponent,
    FooterComponent,
    HeaderComponent

    ],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
