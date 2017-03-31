import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {AuthService} from "../services/auth-service";
import {NotificationService} from "../services/notifications-service";
@Component({
    selector: 'auth-cmp',
    moduleId: module.id,
    templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent implements OnInit{
    @ViewChild('myModal') modal: ModalComponent;
    private newUser: boolean;
    
    constructor(private auth: AuthService, private notification: NotificationService) {
        this.newUser = true;
    }
    
    ngOnInit() {
        this.modal.open();
    }
    
    public authenticate(username, password, login) {
        return login ? this.login(username, password) : this.signup(username, password);
    }
    
    private login(username, password) {
        this.auth.authenticate(username, password)
            .then((response) => {
                if (response.success) {
                    this.notification.presentSuccessNotification("Login success");
                    this.modal.close();   
                } else {
                    this.notification.presentErrorNotification("User does not exist, please try again");
                }
            })
            .catch(() => {
                this.notification.presentErrorNotification("Failed to authenticate user");
            });
    }
    
    private signup(username, password) {
        this.auth.signup(username, password)
            .then((response) => {
                if (response.success) {
                    this.notification.presentSuccessNotification("Signup success");
                    this.modal.close();
                } else {
                    this.notification.presentErrorNotification("User already exists");
                }
            })
            .catch(() => {
                this.notification.presentErrorNotification("Failed to signup user");
            });
    }
}