import {Injectable, EventEmitter} from "@angular/core";
@Injectable()
export class SearchService {
    public query: EventEmitter<string>;
    
    constructor() {
        this.query = new EventEmitter();
    }
    
    public addQuery(query) {
        this.query.emit(query);
    }
}