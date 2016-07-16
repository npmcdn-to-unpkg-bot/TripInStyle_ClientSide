import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import {EventsService } from "./events.service";
import {State} from "./state";
import {Event} from "./event";
import {Category} from "./category";

@Component({
    selector: 'state',
    templateUrl: 'html/state.component.html',
    styleUrls: ['css/events.component.css']
})

export class StateComponent implements OnInit {
    private stateName: string;
    private isInitialized:boolean = false;
    private eventsList: Event[] = [];
    private userCategoriesMenu: Category[] = [];
    private selectedCategories: Category[] = [];
    private filterMenu: boolean = false;
    private limit: number = 7;
    
    constructor(private eventsService:EventsService,
                private router: Router,
                private routeParams: RouteParams ) {}

    changeFilterMenuState() {
        this.filterMenu = !this.filterMenu;
        if(!this.filterMenu) {
            this.isInitialized = false;
            if(!(this.userCategoriesMenu.filter(cat => cat.selected == true)
                === this.eventsService.categoryMenu
                    .filter(cat => cat.selected == true)))
            {
                this.limit = 7;
                this.getEvents();
            }
        }
    }
    
    addStateFilter() {
        this.eventsService.categoryMenu = this.userCategoriesMenu;
        this.router.navigate(['StateSearch']);
    }

    exitFilterMenu() {
        console.log("exit filterMenu");
        if(this.filterMenu) {
            this.changeFilterMenuState();
        }
    }

    changeCategories(category: Category) {
        let isSelected = this.userCategoriesMenu.find(cat => cat === category).selected;
        this.userCategoriesMenu.find(cat => cat === category).selected = !isSelected;
    }
    
    getEvents() {
        this.stateName = this.routeParams.get('stateName');
        this.selectedCategories = this.userCategoriesMenu.filter(cat => cat.selected == true);
        this.eventsService.getEventsAtState(this.stateName, this.selectedCategories)
            .then(
                events => {
                    this.eventsList = events;
                    this.isInitialized = true;
                }
            );
    }
    
    ngOnInit() {
        this.selectedCategories = [];
        this.eventsList = [];
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

    private seeMore() {
        this.limit += 7;
    }

    private homeSearch() {
        this.router.navigate(['Events']);
    }
}