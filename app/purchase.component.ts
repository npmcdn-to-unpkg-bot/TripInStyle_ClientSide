import { Component, OnInit } from '@angular/core'
import {Ticket} from "./ticket";
import {LoginService} from "./login.service";
import {BottomMenuComponent} from "./bottommenu.component";
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'my-purchases',
    templateUrl: 'html/purchase.component.html',
    styleUrls: [
        'css/events.component.css',
        'css/purchase.component.css'
    ],
    directives: [
        BottomMenuComponent
    ]
})

export class PurchaseComponent implements OnInit {
    private isInitialized = false;
    private tickets: Ticket[] = [];
    
    constructor(private loginService: LoginService,
    private router: Router) {}

    private goBack() {
        this.loginService.changeMenu("");
        window.history.back();
    }
    
    ngOnInit() {
        if("undefined" === typeof this.loginService.userLoggedIn) {
            this.router.navigate(['Login']);
            return;
        }
        else {
            this.loginService.getUserPurchases(this.loginService.userLoggedIn.email)
                .subscribe(
                    res => {
                        console.log(res);
                        this.tickets = res;
                        this.isInitialized = true;
                    }
                );
        }
    }
}