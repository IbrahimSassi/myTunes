import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent,RegistrationComponent } from './user';
import { AlbumComponent,AlbumsComponent } from './music';
import { HeaderComponent,FooterComponent,WelcomeComponent,PaginationComponent,SearchComponent } from './shared';
@Component({
  moduleId: module.id,
  directives: [
    ROUTER_DIRECTIVES,
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
