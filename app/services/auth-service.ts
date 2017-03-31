import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {authApi, signupApi} from "./config";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private headers: Headers;
    
    constructor(private http: Http) {
        this.headers = new Headers({'content-type': 'application/json'});
    }
    
    public authenticate(username, pasword) {
        let authUrl = authApi + '?username=' + username + '&password=' + pasword;
        return this.http.post(authUrl, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
    
    public signup(username, password) {
        let signupUrl = signupApi + '?username=' + username + '&password=' + password;
        return this.http.post(signupUrl, {headers: this.headers})
            .map(res => res.json())
            .toPromise();
    }
}