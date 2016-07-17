import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {EventsService} from "./events.service";
import {Category} from "./category";
import {Event} from './event';
import {LoginService} from "./login.service";
import {BottomMenuComponent} from "./bottommenu.component";

@Component({
    selector: 'events',
    templateUrl: 'html/events.component.html',
    styleUrls: ['css/events.component.css'],
    directives: [
        BottomMenuComponent
    ]
})

export class EventsComponent implements OnInit {
    private events:Event[] = [];
    private isInitialized:boolean = false;
    private userCategoriesMenu:Category[] = [];
    private selectedCategories:Category[] = [];
    private filterMenu:boolean = false;
    private limit:number = 7;
    private eventDetails:boolean = false;
    private chosenEvent:Event;

    constructor(private eventsService:EventsService,
                private loginService:LoginService,
                private router:Router) {
        console.log(this.loginService.userLoggedIn);
    }

    private changeFilterMenuState() {
        console.log("Change filter menu state");
        this.filterMenu = !this.filterMenu;
        if (!this.filterMenu) {
            if (!(this.userCategoriesMenu.filter(cat => cat.selected == true)
                === this.eventsService.categoryMenu
                    .filter(cat => cat.selected == true))) {
                this.limit = 7;
                this.getEvents();
            }
        }
    }

    changeFavoriteStatus(event:Event) {
        this.loginService.changeFavorite(event._id).
            subscribe(
            res => {
                if( res )
                    this.events.find(ev => event === ev).changeFavorite();
            });
        //this.loginService.userLoggedIn.changeFavorite(event._id);
        
    }

    private seeEventDetails(event:any) {
        this.eventDetails = true;
        this.chosenEvent = event;
        scroll(0, 0);
    }

    private changeCategories(category:Category) {
        let isSelected = this.userCategoriesMenu.find(cat => cat === category).selected;
        this.userCategoriesMenu.find(cat => cat === category).selected = !isSelected;
    }

    exitFilterMenu() {
        if (this.filterMenu) {
            this.changeFilterMenuState();
        }
    }

    getEvents() {
        this.selectedCategories = this.userCategoriesMenu
            .filter(cat => cat.selected == true);

        console.log("Selected categories");
        console.log(this.selectedCategories);

        if (this.selectedCategories.length > 0) {
            this.eventsService.getEventsOfCategories(this.selectedCategories)
                .then(events => {
                    this.events = events;
                    this.loginService.userLoggedIn.favorites.forEach(eventId => {
                        if(this.events.findIndex(event => event._id == eventId) > -1)
                            this.events.find(event => event._id == eventId).isFavorite = true;
                    });
                    this.isInitialized = true;
                });
        }
        else {
            this.events = [];
        }
    }

    addStateFilter() {
        this.eventsService.categoryMenu = this.userCategoriesMenu;
        this.router.navigate(['StateSearch']);
    }

    private purchase(eventId: string) {
        this.loginService.changeMenu("purchase");
        this.router.navigateByUrl('ticket-purchase/'+eventId);
    }

    private goBack() {
        this.eventDetails = false;
        this.chosenEvent = null;
    }

    private seeMore() {
        this.limit += 7;
    }

    ngOnInit() {
        if ("undefined" === typeof this.loginService.userLoggedIn)
            this.router.navigate(['Login']);
        //console.log(this.loginService.userLoggedIn);
        else {
            this.events = [];
            if (this.eventsService.categoryMenu.length == 0) {
                this.eventsService.getCategories().then(
                    cat => {
                        this.userCategoriesMenu = cat;
                        this.getEvents();
                    }
                )
            }
            else {
                this.userCategoriesMenu = this.eventsService.categoryMenu;
                this.selectedCategories = this.userCategoriesMenu.filter(cat=>cat.selected == true);
                this.getEvents();
            }
        }
    }
}