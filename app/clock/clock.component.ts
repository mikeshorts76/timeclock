import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'tc-clock',
    moduleId: module.id,
    templateUrl: 'clock.component.html'
})

export class ClockComponent implements OnInit {
    message: string = '';
    status: string = '';

    //methods
    clockIn(): void {
        var date = new Date();
        this.message = 'Successfully clocked in at: ' + date; 
    }

    clockOut(): void {
        if (this.status === 'clocked in') {
            var date = new Date();
            this.message = 'Successfully clocked out at: ' + date;
        } else {
            this.message = "Currently already clocked out";
        }        
    }

    //OnInit implemented
     ngOnInit(): void {
        this.status = 'clocked out';
    }
}