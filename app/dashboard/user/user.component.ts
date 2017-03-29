import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee-service";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    
    constructor(private employeeService: EmployeeService) {
        
    }
    
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');

    }

    public createEmployee(name, phone, supervisor) {
        this.employeeService.createEmployee(name, phone, supervisor)
            .then((res) => {
                console.log('create employee response: ', res);
            })
            .catch((err) => {
                console.log('create employee err: ', err);
            });
    }
}
