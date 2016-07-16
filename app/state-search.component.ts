import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {EventsService} from "./events.service";
import {State} from "./state";

@Component ({
    selector: 'state-search',
    templateUrl: 'html/state-search.component.html',
    styleUrls: ['css/state-search.component.css']
})

export class StateSearchComponent{
    private states: State[] = [];
    private allStates: State[] = [];
    private mySearch: string = "";


    constructor(private eventsService: EventsService,
                private router: Router) {
        this.eventsService.getStates().then(states => {
            this.allStates = states;
            this.updateList();
        });
    }

    chooseState(state: State) {
        this.router.navigate(['State', { stateName: state.name }]);
    }

    private goBack() {
        window.history.back();
    }

    private updateList() {
        console.log(this.mySearch);
        if(this.mySearch == "") {
            this.states = this.allStates;
        }
        else {
            console.log(this.allStates.filter(state =>
                state.name.indexOf(this.mySearch) == 0));
            this.states = this.allStates.filter(state =>
            state.name.toLowerCase().indexOf(this.mySearch.toLowerCase()) == 0);
        }
    }

}