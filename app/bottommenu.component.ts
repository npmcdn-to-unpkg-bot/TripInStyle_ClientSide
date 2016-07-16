import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {EventsService} from "./events.service";
import {Category} from "./category";
import {Event} from './event';
import {LoginService} from "./login.service";

@Component({
    selector: 'bottom-menu',
    templateUrl: 'html/bottommenu.component.html',
    styleUrls: ['css/events.component.css']
})

export class BottomMenuComponent {
    constructor(private router: Router,
    private loginService: LoginService) {}
    
    private navigate(navigatePath: string) {
        switch (navigatePath) {
            case 'home':
                this.router.navigate(['Events']);
                break;
            case 'favorite':
                this.router.navigate(['Favorites']);
                break;
            case 'ticket':
                this.router.navigate(['Purchases']);
                break;
        }
        this.loginService.changeMenu(navigatePath);
    }
}