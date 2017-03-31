import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {EmployeeService} from "../../services/employee-service";
import {NotificationService} from "../../services/notifications-service";

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    public employeeList: any;
    public recentEmployee: string;
    public editRowId: any;
    
    constructor(private employeeService: EmployeeService, private notification: NotificationService) {
        this.employeeList = [];
        this.recentEmployee = '';
    }
    
    ngOnInit(){
        this.updateDashboard();
    }
    
    private updateDashboard() {
        this.employeeService.getEmployees()
            .then((employees) => {
                this.employeeList = employees;
                this.recentEmployee = this.employeeList[this.employeeList.length-1];
            })
            .catch(() => {
                this.notification.presentErrorNotification("There was a problem loading employees");
            });
    }
    
    public editEmployee(employeeId) {
        this.editRowId = employeeId;
    }
    
    public updateEmployee(employee) {
        this.employeeService.updateEmployee(employee.id, employee.name, employee.phone, employee.supervisors)
            .then(() => {
                this.editRowId = -1;
                this.updateDashboard();
                this.notification.presentSuccessNotification("Employee updated");
            })
            .catch(() => {
                this.editRowId = -1;
                this.updateDashboard();
                this.notification.presentErrorNotification("There was a problem updating the employee");
            });
    }
    
    public rowIdsMatch(employeeId) {
        return employeeId === this.editRowId;
    }

    public deleteEmployee(employee) {
        this.employeeService.deleteEmployee(employee.id)
            .then(() => {
                this.updateDashboard();
                this.notification.presentSuccessNotification("Employee deleted");
            })
            .catch(() => {
                this.updateDashboard();
                this.notification.presentErrorNotification("There was a problem deleting the employee");
            });
    }
}
