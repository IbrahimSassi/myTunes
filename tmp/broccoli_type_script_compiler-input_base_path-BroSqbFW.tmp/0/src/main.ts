import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment,routes } from './app/';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
      provideRouter(routes)

]);
