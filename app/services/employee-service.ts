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
    
    public getEmployees() {
        return this.http.get(employeeApi, {headers: this.headers})
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