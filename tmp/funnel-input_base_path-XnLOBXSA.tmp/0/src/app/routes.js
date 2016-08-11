"use strict";
var user_1 = require('./user');
var music_1 = require('./music');
var shared_1 = require('./shared');
exports.routes = [
    { path: '', component: shared_1.WelcomeComponent },
    { path: '/albums', component: music_1.AlbumsComponent },
    { path: '**', redirectTo: '' },
    { path: '/album', component: music_1.AlbumComponent },
    { path: '/login', component: user_1.LoginComponent },
    { path: '/RegistrationComponent', component: user_1.RegistrationComponent },
];
//# sourceMappingURL=routes.js.map