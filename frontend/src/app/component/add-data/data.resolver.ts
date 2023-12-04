import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {DataService} from "../../data.service";
import {PathObject} from "../../_models/pathObject.model";
import {Observable, of} from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<PathObject> {
    constructor(private service: DataService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<PathObject> {
        const target = route.data.target;
        if (!target) {
            return of({activity: null, indicator: null, reference: null});
        }
        const id = route.params.id
        if (target === 'indicator') {
            return this.service.getPathByIndicatorId(id);
        }
        if (target === 'reference') {
            return this.service.getPathByReferenceId(id);
        }
    }
}
