import { Component, OnInit, HostListener } from "@angular/core";
import {HeaderService} from "../header/header.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isSticky: boolean = false;
  element = document.getElementById("header");
  constructor(headerService: HeaderService) {
    headerService.setHeader('visualize')
  }

  ngOnInit() {}


  backToTop() {
    this.element.scrollIntoView({ behavior: "smooth" });
  }

}
