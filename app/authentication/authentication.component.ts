import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
@Component({
    selector: 'auth-cmp',
    moduleId: module.id,
    templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent implements OnInit{
    @ViewChild('myModal') modal: ModalComponent;
    
    ngOnInit() {
        this.modal.open();
    }
    
    authenticate() {
        this.modal.close();
    }
}