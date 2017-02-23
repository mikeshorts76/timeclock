import { Component } from '@angular/core';

@Component({
    selector: 'tc-app',
    template: `<div>
                    <h1>{{pageTitle}}</h1>                    
               </div>`
})

export class AppComponent {
    pageTitle: string = 'Time Clock';
 }
