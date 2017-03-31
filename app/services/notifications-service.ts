import {Injectable} from "@angular/core";
declare var $: any;

@Injectable()
export class NotificationService {
    constructor() {
        
    }
    
    public presentSuccessNotification(message) {
        $.notify({
            icon: "notifications",
            message: message

        },{
            type: 'success',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }
    
    public presentErrorNotification(message) {
        $.notify({
            icon: "notifications",
            message: message

        },{
            type: 'danger',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }
}