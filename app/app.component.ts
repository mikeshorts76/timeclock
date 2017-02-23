import { Component } from '@angular/core';

@Component({
    selector: 'tc-app',
    moduleId: module.id,   
    templateUrl: 'app.module.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    pageTitle: string = 'Time Clock';
 }
