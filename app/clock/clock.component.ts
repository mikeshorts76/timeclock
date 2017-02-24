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
       if (this.status === 'clocked out') {
            var date = new Date();
            this.message = 'Successfully clocked in at: ' + date;

            this.status = 'clocked in';
        } else {
            this.message = "Currently already clocked in";
        }        
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

    //OnInit implemented
     ngOnInit(): void {
        this.status = 'clocked out';
    }
}