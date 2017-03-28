import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    
    constructor(private router: Router) {
        
    }

    public authenticate() {
        this.router.navigate(['/dashboard'])
    }
}