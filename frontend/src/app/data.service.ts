import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {userInfo} from 'os';
import {map} from 'rxjs/operators';
import {User} from 'src/app/_models';
import {review} from "./_models/review.model";
import {LearningEvent} from "./_models/learningEvent.model";
import {Reference} from "./_models/reference.model";
import {indicator} from "./_models/indicator.model";
import {LearningActivity} from "./_models/learningActivity.model";
import {PathObject} from "./_models/pathObject.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    //private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;


    loggedIn: boolean;
    //uri = 'https://programmingzen.org/openlair';
    //uri = 'https://backend.openlair.edutec.science/openlair'; //live
    //uri = 'http://localhost:49160/openlair';

    uri = 'http://localhost:3001/openlair';  //local

    //68.65.123.130    OLD
    //198.187.29.73

    constructor(private http: HttpClient) {
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        //this.currentUser = this.currentUserSubject.asObservable();
    }

    getdata(): Observable<LearningEvent[]> {
        return this.http.get<LearningEvent[]>(`${this.uri}/display/data`);
    }

    getEvents(): Observable<LearningEvent[]> {
        return this.http.get<LearningEvent[]>(`${this.uri}/events`);
    }

    getActivities(): Observable<LearningActivity[]> {
        return this.http.get<LearningActivity[]>(`${this.uri}/activities`);
    }

    getActivitiesByIndicatorId(indicatorId: string): Observable<LearningActivity[]> {
        return this.http.get<LearningActivity[]>(`${this.uri}/activities/indicator/${indicatorId}`);
    }

    getIndicators(): Observable<indicator[]> {
        return this.http.get<indicator[]>(`${this.uri}/indicators`);
    }

    getIndicatorById(id: string): Observable<indicator> {
        return this.http.get<indicator>(`${this.uri}/indicator/${id}`);
    }

    getPathByIndicatorId(id: string): Observable<PathObject> {
        return this.http.get<PathObject>(`${this.uri}/path/${id}`);
    }

    getPathByReferenceId(id: string): Observable<PathObject> {
        return this.http.get<PathObject>(`${this.uri}/path/reference/${id}`);
    }

    getReviews(indicatorId: string) {
        return this.http.get(`${this.uri}/display/review/${indicatorId}`);
    }

    getReviewById(reviewId: number) {
        return this.http.get<review>(`${this.uri}/display/review/${reviewId}/edit`);
    }

    getReviewByIndicatorIdAndUsername(indicatorId: string, username: string) {
        return this.http.get<review>(`${this.uri}/display/review/${indicatorId}/${username}`);
    }

    addReview(review: review) {
        return this.http.post(`${this.uri}/review/add`, review);
    }

    editReview(review: review) {
        return this.http.put(`${this.uri}/review/edit`, review);
    }

    deleteReview(reviewId: string) {
        return this.http.delete(`${this.uri}/review/${reviewId}/delete`);
    }

    getReferences(): Observable<Reference[]> {
        return this.http.get<Reference[]>(`${this.uri}/reference`);
    }

    getReferenceById(referenceId: string) {
        return this.http.get(`${this.uri}/reference/${referenceId}`);
    }

    getReferenceByReferenceNumber(referenceNumber: string) {
        return this.http.get<Reference>(`${this.uri}/reference/number/${referenceNumber}`);
    }

    updateReference(id, reference: Reference) {
        return this.http.put(`${this.uri}/reference/${id}/edit`, reference);
    }

    deleteReference(reference: Reference) {
        return this.http.delete(`${this.uri}/reference/${reference._id}/${reference.referenceNumber}/delete`);
    }

    getsearchresult(search: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/plain',
            })
        }
        return this.http.post(`${this.uri}/getsearchmetrics`, {search, httpOptions});
    }

    getsearchind(search: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/plain',
            })
        }
        return this.http.post(`${this.uri}/getsearchindicator`, {search, httpOptions});
    }

    addIndicatorAndReference(data: any) {
        return this.http.post(`${this.uri}/indicator/add`, data);
    }

    editIndicator(id, data: any) {
        return this.http.put(`${this.uri}/indicator/${id}/edit`, data);
    }

    deleteIndicator(indicatorId) {
        return this.http.delete(`${this.uri}/indicator/${indicatorId}/delete`);
    }

    removeIndicatorFromActivity(activityId: any, indicatorId: string) {
        return this.http.put(`${this.uri}/activity/${activityId}/remove`, {indicatorId});
    }

    login(username: any, password: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/plain',
            })
        }

        return this.http.post(`${this.uri}/login`, {username, password, httpOptions}).pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            //user.authdata = window.btoa(username + ':' + password);
            //this.currentUserSubject.next(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            //return user;
        }));
    }

    register(user: User) {
        return this.http.post<boolean>(`${this.uri}/register`, user);
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }


    upload(file) {


        const formData = new FormData();

        formData.append('file', file, file.name);
        return this.http.post(`${this.uri}/upload`, formData);


    }

    generateOldTreeStructure(oldTreeStructure) {
        return this.http.post(`${this.uri}/generate/treeStructure`, oldTreeStructure);
    }

    getEventsByActivityId(id: any) {
        return this.http.get<LearningEvent[]>(`${this.uri}/eventsByActivityId/${id}`)
    }
}


