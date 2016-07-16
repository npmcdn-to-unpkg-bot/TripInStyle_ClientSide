import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {EventsService} from "./events.service";
import {Category} from "./category";
import { Event } from './event';

@Component({
    selector: 'events',
    templateUrl: 'html/events.component.html',
    styleUrls: ['css/events.component.css']
})

export class EventsComponent implements OnInit {
    private events: Event[] = [];
    private isInitialized: boolean = false;
    private userCategoriesMenu: Category[] = [];
    private selectedCategories: Category[] = [];
    private filterMenu: boolean = false;
    private limit: number = 7;
    private eventDetails: boolean = false;
    private chosenEvent: Event;
    
    constructor(private eventsService: EventsService,
                private router: Router) {

    }

    private changeFilterMenuState() {
        console.log("Change filter menu state");
        this.filterMenu = !this.filterMenu;
        if(!this.filterMenu) {
            if(!(this.userCategoriesMenu.filter(cat => cat.selected == true)
                === this.eventsService.categoryMenu
                    .filter(cat => cat.selected == true)))
            {
                this.limit = 7;
                this.getEvents();
            }
        }
    }

    someFunc(event: any) {
        console.debug("Change favorite status for event");
        console.log(event);
        this.events.find(ev => event === ev).changeFavorite();
    }

    private seeEventDetails(event: any) {
        this.eventDetails = true;
        this.chosenEvent = event;
        scroll(0,0);
    }

    private changeCategories(category: Category) {
        let isSelected = this.userCategoriesMenu.find(cat => cat === category).selected;
        this.userCategoriesMenu.find(cat => cat === category).selected = !isSelected;
    }

    exitFilterMenu() {
        if(this.filterMenu) {
            this.changeFilterMenuState();
        }
    }

    getEvents() {
        this.selectedCategories = this.userCategoriesMenu
            .filter(cat => cat.selected == true);

        console.log("Selected categories");
        console.log(this.selectedCategories);

        if(this.selectedCategories.length > 0) {
            this.eventsService.getEventsOfCategories(this.selectedCategories)
                .then(events => {
                    this.events = events;
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

    private goBack() {
        this.eventDetails = false;
        this.chosenEvent = null;
    }
    
    private seeMore() {
        this.limit += 7;
    }

    ngOnInit() {
        this.events = [];
        if(this.eventsService.categoryMenu.length == 0) {
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