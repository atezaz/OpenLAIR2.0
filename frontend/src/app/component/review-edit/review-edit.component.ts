import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {review} from "../../_models/review.model";
import {User} from "../../_models";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {indicator} from "../../_models/indicator.model";
import {HeaderService} from "../header/header.service";
import {Reference} from "../../_models/reference.model";

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
                console.log(review)
                if (review) {
                    this.router.navigate([`review/${review._id}/edit`]);
                }
            })
        }
    }

    ngOnInit() {
        setTimeout(() => {
            this.formGroup.controls['name'].setValue(this.currentUser.username)

            if (this.review) {
                this.initializeForm(this.review);
            }
        }, 100)
    }

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
        saveReview$.subscribe(savedRating => {
            this.router.navigate(['/']);
        });
    }

    ratingChanged(formControlName: string, rating: number) {
        this.formGroup.controls[formControlName].setValue(rating);
    }

    private initializeForm(review: review) {
        this.formGroup.setValue(review);
        this.indicatorQuality = review.indicatorQuality;
        this.articleClarity = review.articleClarity;
        this.articleData = review.articleData;
        this.articleAnalysis = review.articleAnalysis;
        this.articleConclusion = review.articleConclusion;
        this.articleContribution = review.articleContribution;
    }

    deleteReview() {
        this.dataService.deleteReview(this.formGroup.controls['_id'].value).subscribe(savedRating => {
            this.router.navigate(['/']);
        });
    }

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
