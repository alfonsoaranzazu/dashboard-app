import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthenticationComponent} from "./authentication.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    declarations: [ LoginComponent ]
})

export class AuthenticationModule {} 