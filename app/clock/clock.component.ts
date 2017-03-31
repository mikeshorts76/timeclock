import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ClockService } from './services/clock.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'tc-clock',
    moduleId: module.id,
    templateUrl: 'clock.component.html',
    providers: [ClockService]
})

export class ClockComponent implements OnInit {

    //constructor
    constructor(
        private clockService: ClockService
    ){}

     private model = new ClockRequest();
     

    // Define input properties
    //@Input() clock: 

    message: string = '';
    status: string = '';

    //methods
    clockIn(): void {        
        let pingResponse: Observable<any>;
        pingResponse = this.clockService.ping();
        //alert(message);
    //    if (this.status === 'clocked out') {
    //         var date = new Date();
    //         this.submitClock();
    //         this.message = 'Successfully clocked in at: ' + date;

    //         this.status = 'clocked in';
    //     } else {
    //         this.message = "Currently already clocked in";
    //     }        
    }

    clockOut(): void {
        if (this.status === 'clocked in') {
            var date = new Date();
            this.message = 'Successfully clocked out at: ' + date;

            this.status = 'clocked out';
        } else {
            this.message = "Currently already clocked out";
        }        
    }

    submitClock() {
        let clockOperation: Observable<ClockRequest>;

        //this.clockService.addTimeclock(this.model);
    }

    //OnInit implemented
     ngOnInit(): void {
        this.status = 'clocked out';
    }

    ping(): void {
        this.clockService.ping();
    }
}

export class ClockRequest {
    timeIn: string = '';
    timeOut: string = '';
}