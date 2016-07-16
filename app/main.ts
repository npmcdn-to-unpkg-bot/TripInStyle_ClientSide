import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { enableProdMode, provide } from '@angular/core';
enableProdMode();


import {
    ROUTER_PROVIDERS
} from '@angular/router-deprecated';
import { LocationStrategy, Location, HashLocationStrategy} from '@angular/common';


bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
