import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";

@NgModule({
    imports:      [
        BrowserModule,
        Ng2Bs3ModalModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, AuthenticationComponent, DashboardComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
