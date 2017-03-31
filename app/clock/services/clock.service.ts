// Imports
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ClockComponent, ClockRequest } from '../clock.component';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// @Component({
//     providers: [Http]
// })

@Injectable()
export class ClockService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private timeclockUrl = 'http://localhost:3001/api/v1/timeclock'; 
     private baseUrl = 'http://localhost:3001/api/v1';

     getTimeclock () : Observable<ClockRequest> {
        var response = this.http.get(this.timeclockUrl)
                        .map((res:Response) => res.json())                         
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return response;
     }

    // Add a new timeclock record
    addTimeclock (body: Object): Observable<ClockRequest[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.timeclockUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    ping (): Observable<any>  {
        var response = this.http.get(this.baseUrl + '/ping')
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return response;
    }

    // Update a comment
    // updateComment (body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options       = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   

    // // Delete a comment
    // removeComment (id:string): Observable<Comment[]> {
    //     return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   

}