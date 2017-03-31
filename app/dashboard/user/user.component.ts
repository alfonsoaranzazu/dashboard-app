import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee-service";
import {NotificationService} from "../../services/notifications-service";
declare var $: any;

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent {
    
    constructor(private employeeService: EmployeeService, private notification: NotificationService) {
        
    }

    public createEmployee(name, phone, supervisor) {
        this.employeeService.createEmployee(name, phone, supervisor)
            .then((response) => {
                if (response.success) {
                    this.notification.presentSuccessNotification("Employee created");
                    // make dashboard link on sidebar active
                    $("body > my-app > div > div.sidebar > sidebar-cmp > div.sidebar-wrapper > div > ul > li:nth-child(1) > a > p").trigger("click");
                } else {
                    this.notification.presentErrorNotification("Employee already exists");
                }
                
            })
            .catch(() => {
                this.notification.presentErrorNotification("There was a problem creating the employee");
            });
    }
}
