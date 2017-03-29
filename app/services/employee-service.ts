import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {employeeApi} from "./config";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmployeeService {
    
    constructor(public http: Http) {
           
    }
    
    public getEmployees() {
        let headers = new Headers({'content-type': 'application/json'});
        return this.http.get(employeeApi, {headers: headers})
            .map(res => res.json())
            .toPromise();
    }
}