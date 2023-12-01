import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class HeaderService {
  headerSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  setHeader(header: string) {
    this.headerSubject.next(header);
  }
}
