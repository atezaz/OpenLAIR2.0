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

    @Output()
    checkboxEmitter: EventEmitter<indicator> = new EventEmitter<indicator>();

    @Output()
    getMetericsEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onReviewEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onVerdictEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    updateValues: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    indicatorDeleted: EventEmitter<indicator> = new EventEmitter<indicator>();

    @Input()
    loggedIn: User;

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit() {
    }

    onCheckboxChange(indic: indicator) {
        this.checkboxEmitter.emit(indic)
    }

    editAsSuperAdmin(indic: indicator) {
        this.router.navigate([`indicator/${indic._id}/edit`])
    }

    deleteAsSuperAdmin(indic: indicator) {
        if (confirm("Do you really want to delete this Indicator?")) {
            this.indicatorDeleted.emit(indic)
            this.dataService.deleteIndicator(indic._id).subscribe(() => {
                this.updateValues.emit();
            });
        }
    }

    getFullIndicatorName(indic: indicator): string {
        return `${indic.Title} ${indic.referenceNumber}`
    }

    navigateToReferenceLink(indic: indicator) {
        this.dataService.getReferenceByReferenceNumber(indic.referenceNumber).subscribe(reference => {
            window.open(reference.link);
        })
    }
}
