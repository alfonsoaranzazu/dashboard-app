import {Pipe} from "@angular/core";
@Pipe({
    name: "SearchPipe"
})
export class SearchPipe {
    transform(value, queryString) {
        if (value == null || value == "") {
            return null;
        }
        
        if (queryString !== undefined) {
            return value.filter(item => item.name.toLowerCase().indexOf(queryString.toLocaleLowerCase()) !== -1);
        } else {
            return value;
        }
    }
}