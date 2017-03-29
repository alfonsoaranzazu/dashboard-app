import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {EmployeeService} from "../../services/employee-service";

declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    public employeeList: any;
    public recentEmployee: string;
    
    constructor(private employeeService: EmployeeService) {
        this.employeeList = [];
        this.recentEmployee = '';
    }
    
    ngOnInit(){
        initDemo();
        
        console.log('ng On Init for Home Comp');
        this.employeeService.getEmployees()
            .then((employees) => {
                console.log('employees: ', employees);
                this.employeeList = employees;
                this.recentEmployee = this.employeeList[this.employeeList.length-1].name;
            });
    }
}
