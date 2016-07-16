import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from
    '@angular/router-deprecated';

import { CategoryComponent } from './category.component';
import {EventsService} from "./events.service";
import {EventsComponent} from "./events.component";
import {StateSearchComponent} from "./state-search.component";
import {StateComponent} from "./state.component";
import {LoginComponent} from "./login.component";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        EventsService
    ]
})

@RouteConfig([
    {
        path: '/categories',
        name: 'Categories',
        component: CategoryComponent,
        useAsDefault: true
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
        component: LoginComponent
    }
])

export class AppComponent { }
