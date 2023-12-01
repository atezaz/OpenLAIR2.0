import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from "@angular/router";
import {HeaderService} from "./header.service";
import {TourService} from "../../../assets/js/tour.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPage: string;


  @ViewChild("headerDisplay", {static: true}) headerDisplay: TemplateRef<any>;

  constructor(private dataService: DataService, private router: Router,
              private headerTemplateService: HeaderService,
              readonly tourService: TourService) { }

  ngOnInit() {
    this.headerTemplateService.headerSubject.subscribe(headerString => {
      this.currentPage = headerString;
    })
  }
  addIndicators() {
    this.router.navigate(['/add']);
    //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
  }

  addReference() {
    this.router.navigate(['/reference/add']);
    //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
  }
  references() {
    this.router.navigate(['/reference']);
    //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
  }
  admin() {
    this.router.navigate(['/login']);
  }
  metrics() {

    // this.router.navigate(['/referance'] );
    this.router.navigate([]).then(result => { window.open(`/metrics`, '_blank'); });
  }


  reset() {
   location.href = "/";
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}

