import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {indicator} from "../../../_models/indicator.model";
import {DisplayComponent} from "../display.component";
import {User} from "../../../_models";
import {DataService} from "../../../data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input()
    data: any;

    @Input()
    searchInd: string;

    @Input()
    searchMat: string;

    @Input()
    checkedMap: Map<string, boolean>;

    @Input()
    notVerifiedIndicator: boolean;

    @Output()
    checkboxEmitter: EventEmitter<indicator> = new EventEmitter<indicator>();

    @Output()
    getMetericsEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onReviewEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onVerdictEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onVerifyEmitter: EventEmitter<any> = new EventEmitter<any>();


    @Input()
    loggedIn: User;

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit() {
    }

    // emits the indicator when the checkbox is clicked
    onCheckboxChange(indic: indicator) {
        this.checkboxEmitter.emit(indic)
    }

    // navigates to edit of indicator
    editAsSuperAdmin(indic: indicator) {
        this.router.navigate([`indicator/${indic._id}/edit`])
    }

    // computes the original indicator name with referenceNumber
    getFullIndicatorName(indic: indicator): string {
        return `${indic.Title} ${indic.referenceNumber}`
    }

    // navigates to the link corresponding to the reference of the chosen indicator
    navigateToReferenceLink(indic: indicator) {
        this.dataService.getReferenceByReferenceNumber(indic.referenceNumber).subscribe(reference => {
            window.open(reference.link);
        })
    }
}
