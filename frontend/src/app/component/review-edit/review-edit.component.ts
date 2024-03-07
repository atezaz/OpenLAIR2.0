import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {review} from "../../_models/review.model";
import {User} from "../../_models";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {indicator} from "../../_models/indicator.model";
import {HeaderService} from "../header/header.service";
import {Reference} from "../../_models/reference.model";
import {map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
    selector: 'app-review-edit',
    templateUrl: './review-edit.component.html',
    styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

    currentUser: User;
    indicatorQuality: number;
    articleClarity: number;
    articleData: number;
    articleAnalysis: number;
    articleConclusion: number;
    articleContribution: number;

    formGroup: FormGroup = new FormGroup({
        _id: new FormControl(null),
        name: new FormControl(''),
        indicatorId: new FormControl(null),
        indicatorQuality: new FormControl(null, Validators.required),
        indicatorQualityNote: new FormControl(''),
        articleClarity: new FormControl(null, Validators.required),
        articleClarityNote: new FormControl(''),
        articleData: new FormControl(null, Validators.required),
        articleDataNote: new FormControl(''),
        articleAnalysis: new FormControl(null, Validators.required),
        articleAnalysisNote: new FormControl(''),
        articleConclusion: new FormControl(null, Validators.required),
        articleConclusionNote: new FormControl(''),
        articleContribution: new FormControl(null, Validators.required),
        articleContributionNote: new FormControl(''),
    });
    reviewId: any;
    private review: review;
    indicator: indicator;
    indicatorId: any;
    reference: Reference;

    // initializes Edit page depending on the way the page was opened. Edit or New Review
    constructor(readonly dataService: DataService, private router: Router, private route: ActivatedRoute,
                headerService: HeaderService) {
        headerService.setHeader('add-review')
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.reviewId = this.route.snapshot.params.id;
        if (this.reviewId) {
            this.dataService.getReviewById(this.reviewId).subscribe(review => {
                this.review = review;
                this.dataService.getIndicatorById(review.indicatorId).subscribe(indicator => {
                    this.indicator = indicator;
                    this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
                        this.reference = reference;
                    })
                })
            })
        }
        this.indicatorId = this.route.snapshot.params.indicatorId;
        if (this.indicatorId) {
            this.dataService.getIndicatorById(this.indicatorId).subscribe(indicator => {
                this.indicator = indicator;
                this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
                    this.reference = reference;
                })
            })
            this.dataService.getReviewByIndicatorIdAndUsername(this.indicatorId, this.currentUser.username).subscribe(review => {
                if (review) {
                    this.router.navigate([`review/${review._id}/edit`]);
                }
            })
        }
    }

    // initializes the form after a timeout for getting data from the backend
    ngOnInit() {
        setTimeout(() => {
            this.formGroup.controls['name'].setValue(this.currentUser.username)

            if (this.review) {
                this.initializeForm(this.review);
            }
        }, 100)
    }

    // if the form is valid saves a new or overwrites an exisiting review
    onSubmit() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }

        const data = this.formGroup.value;
        data.indicatorId = this.indicator._id;
        const saveReview$ = this.reviewId ?
            this.dataService.editReview(data) :
            this.dataService.addReview(data);
        saveReview$
            .pipe(switchMap(savedRating => this.dataService.markIndicatorAsReviewed(data.indicatorId, true)))
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

    // sets formcontrol Value for given formcontrolName rating
    ratingChanged(formControlName: string, rating: number) {
        this.formGroup.controls[formControlName].setValue(rating);
    }

    // initializes Form
    private initializeForm(review: review) {
        this.formGroup.setValue(review);
        this.indicatorQuality = review.indicatorQuality;
        this.articleClarity = review.articleClarity;
        this.articleData = review.articleData;
        this.articleAnalysis = review.articleAnalysis;
        this.articleConclusion = review.articleConclusion;
        this.articleContribution = review.articleContribution;
    }

    // deletes an existing Review
    deleteReview() {
        this.dataService.deleteReview(this.formGroup.controls['_id'].value).pipe(
            switchMap(() => {
                return this.dataService.getReviews(this.indicator._id)
            }),
            switchMap((reviews: review[]) => {
                if (reviews.length === 0) {
                    return this.dataService.markIndicatorAsReviewed(this.indicator._id, false);
                } else {
                    return of(reviews);
                }
            })
        )
            .subscribe(savedRating => {
            this.router.navigate(['/']);
        });
    }

    // reduces the link string to only show the part after https:// or www.
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
}
