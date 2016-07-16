import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
var constants = require('./constants');
import {Category} from "./category";
import {Event} from "./event";
import {State} from "./state";

@Injectable()
export class EventsService {
    private getEventFromCategoriesUrl: string = constants.WEBSERVICE_URL + "getEventsByCategory";
    private getEventsCategoriesUrl: string = constants.WEBSERVICE_URL + "getAllCategories";
    private getAllStatesUrl: string = constants.WEBSERVICE_URL + "getAllStates";
    private getEventsAtStatesUrl: string = constants.WEBSERVICE_URL + "getEventsByState";
    private getUserFivoriteUrl: string = constants.WEBSERVICE_URL + "getUserFavorites";
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers});
    categoryMenu: Category[] = [];

    constructor(private http: Http) {}

    getCategories() :Promise<Category[]> {
        console.log("Get categories");
        return this.http.get(this.getEventsCategoriesUrl)
            .toPromise()
            .then(this.convertToCategories)
            .catch(this.handleError);
    }

    private categoriesToString(categories: Category[] = this.categoryMenu.filter(cat => cat.selected == true)) {
        if(this.categoryMenu.length == 0) {
            this.getCategories();
        }
        let categoriesTitle = '';
        for(let c of categories) {
            if(categories.indexOf(c) === categories.length-1)
                categoriesTitle += c.title.toLowerCase();
            else
                categoriesTitle += c.title.toLowerCase() + ",";
        }
        return categoriesTitle;
    }

    getEventsOfCategories(categories: Category[]) : Promise<Event[]> {
        return this.http.post(this.getEventFromCategoriesUrl,
            JSON.stringify({
                category: this.categoriesToString(categories)
            }),this.options)
            .toPromise()
            .then(this.convertToEvents)
            .catch(this.handleError);
    }

    getUserFavorite(email: string) : Promise<Event[]> {
        return this.http.post(this.getUserFivoriteUrl,
            JSON.stringify({
                username: email
            }),this.options)
            .toPromise()
            .then(this.convertToEvents)
            .catch(this.handleError);
    }
    
    getStates() :Promise<State[]> {
        return this.http.get(this.getAllStatesUrl)
            .toPromise()
            .then(this.convertToStatesList)
            .catch(this.handleError);
        
    }

    getEventsAtState(state: string, categories: Category[] = this.categoryMenu.filter(cat=>cat.selected ==true) ) :Promise<Event[]> {
        let categoriesString = this.categoriesToString(categories);
        return this.http.post(this.getEventsAtStatesUrl,
            JSON.stringify({
                state: state,
                category: categoriesString
            }), this.options)
            .toPromise()
            .then(this.convertToEvents)
            .catch(this.handleError);

    }

    private convertToCategories(res) {
        console.log("convert to categories");
        let body = res.json();
        let categories: Category[]= [];
        for(let category of body) {
            categories.push(new Category(category._id, category.title,category.image))
        }
        return categories;
    }
    
    private convertToEvents(res) {
        let body = res.json();
        let events: Event[] = [];
        for(let event of body) {
            events.push(new Event(event._id, event.title, event.description,
                event.state, event.city, event.place, event.startDate,
                event.endDate, event.startTime, event.endTime, event.price,
                event.coin, event.image, event.tickets));
        }
        return events;
    }
    
    private convertToStatesList(res: any) {
        let body = res.json();
        let states: State[] = [];
        for(let state of body) {
            states.push(new State(state.name, state.image));
        }
        return states;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}