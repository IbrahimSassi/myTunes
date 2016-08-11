"use strict";
var login_component_1 = require('./user/login.component');
var registration_component_1 = require('./user/registration.component');
var album_component_1 = require('./music/album.component');
var albums_component_1 = require('./music/albums.component');
var shared_1 = require('./shared');
exports.routes = [
    { path: '', component: shared_1.WelcomeComponent },
    { path: 'albums', component: albums_component_1.AlbumsComponent },
    { path: 'album', component: album_component_1.AlbumComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: '**', redirectTo: '' },
];
//# sourceMappingURL=routes.js.map