import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {employeeApi} from "./config";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmployeeService {
    private headers: any;
    
    constructor(public http: Http) {
        this.headers = new Headers({'content-type': 'application/json'});
    }
    
    public createEmployee(name, phone, supervisor) {
        let createEmployeeUrl = employeeApi + '?name=' + name + '&phone=' + phone + '&supervisors=' + supervisor;
        return this.http.post(createEmployeeUrl, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
    
    public getEmployees() {
        return this.http.get(employeeApi, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
    
    public updateEmployee(id, name, phone, supervisor) {
        let updateEmployeeUrl = employeeApi + '?id=' + id + '&name=' + name + '&phone=' + phone + '&supervisors=' + supervisor;
        return this.http.put(updateEmployeeUrl, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
    
    public deleteEmployee(id) {
        let deleteEmployeeUrl = employeeApi + '?id=' + id;
        return this.http.delete(deleteEmployeeUrl, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
}