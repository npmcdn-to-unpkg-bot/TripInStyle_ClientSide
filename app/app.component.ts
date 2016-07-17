import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from
    '@angular/router-deprecated';

import { CategoryComponent } from './category.component';
import {EventsService} from "./events.service";
import {EventsComponent} from "./events.component";
import {StateSearchComponent} from "./state-search.component";
import {StateComponent} from "./state.component";
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
import {FavoriteComponent} from "./favorites.component";
import {PurchaseComponent} from "./purchase.component";
import {PurchaseTicketsComponent} from "./ticket-purchase.component";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        LoginService,
        EventsService
    ]
})

@RouteConfig([
    {
        path: '/categories',
        name: 'Categories',
        component: CategoryComponent,
    },
    {
        path: '/events',
        name: 'Events',
        component: EventsComponent
    },
    {
        path: '/stateSearch',
        name: 'StateSearch',
        component: StateSearchComponent
    },
    {
        path: '/state/:stateName',
        name: 'State',
        component: StateComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/myFavorites',
        name: 'Favorites',
        component: FavoriteComponent
    },
    {
        path: '/myPurchases',
        name: 'Purchases',
        component: PurchaseComponent
    },
    {
        path: '/ticket-purchase/:eventId',
        name: 'PurchaseTickets',
        component: PurchaseTicketsComponent
    }
])

export class AppComponent { }
