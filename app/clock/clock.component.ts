import { Component } from '@angular/core'

@Component({
    selector: 'tc-clock',
    moduleId: module.id,
    templateUrl: 'clock.component.html'
})

export class ClockComponent {

    clockIn(): void {
        alert('clocked in!');
    }

    clockOut(): void {
        alert('clocked out!');
    }
}