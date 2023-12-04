import {Component, OnInit} from "@angular/core";
import {DisplayComponent} from "../display/display.component";
import {DataService} from "../../data.service";
import {Reference} from "../../_models/reference.model";
import {Observable} from "rxjs";
import {HeaderService} from "../header/header.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {User} from "../../_models";

@Component({
  selector: "app-referance",
  templateUrl: "./referance.component.html",
  styleUrls: ["./referance.component.css"],
})
export class ReferanceComponent implements OnInit {
  element = document.getElementById("header");

  references$: Observable<Reference[]> = this.dataService.getReferences()
    .pipe(tap(references => this.sortByRefNumber(references)));
  loggedIn: User;

  constructor(private dataService: DataService, private router: Router, headerService: HeaderService) {
    headerService.setHeader('references')
    this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  backToTop() {
    this.element.scrollIntoView({behavior: "smooth"});
  }

  protected readonly DisplayComponent = DisplayComponent;

  shortenLink(link: string) {
    const splittedLink = link.split('//');
    let index = 0;
    if (splittedLink.length > 1) {
      index = 1;
    }
    if (splittedLink[index].includes('www.')) {
      return splittedLink[index].slice(4);
    } else {
      return splittedLink[index];
    }
  }

  editAsSuperAdmin(id: any) {
    this.router.navigate([`reference/${id}/edit`]);
  }

  deleteAsSuperAdmin(reference: Reference) {
    if (confirm("Do you really want to delete this Reference?")) {
      this.dataService.deleteReference(reference).subscribe(() => {
        this.references$ = this.dataService.getReferences()
          .pipe(tap(references => this.sortByRefNumber(references)));
      });
    }
  }

  private sortByRefNumber(references: Reference[]): Reference[] {
    return references.sort((a,b) =>{
      const numberA = this.extractNumberFromRefNumber(a.referenceNumber);
      const numberB = this.extractNumberFromRefNumber(b.referenceNumber);
      if (numberA > numberB) {
        return 1;
      } else {
        return -1;
      }
    } )
  }

  private extractNumberFromRefNumber(refNumber: string): number {
    return Number(refNumber.substring(1, refNumber.length-1));
  }
}
