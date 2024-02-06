import {Component, Input, OnInit} from '@angular/core';
import {review} from "../../_models/review.model";
import {indicator} from "../../_models/indicator.model";
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-review-display',
    templateUrl: './review-display.component.html',
    styleUrls: ['./review-display.component.css']
})
export class ReviewDisplayComponent implements OnInit {

    @Input()
    indicator: indicator;

    reviews: review[];
    reviewAverage: review;
    totalAverage: number;
    loggedIn: any;
    reviewExistsForUser = false;
    buttonLabel = 'Create Review';

    constructor(private dataService: DataService, private router: Router) {
        this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.getReviews();
    }

    // retrieves Reviews from the database and calculates the averages
    private getReviews() {
        this.dataService.getReviews(this.indicator._id).subscribe((reviews: review[]) => {
            this.reviews = !this.loggedIn ? reviews : reviews.sort((e1, e2) => {
                if (e1.name === this.loggedIn.username) {
                    return -1;
                } else if (e2.name === this.loggedIn.username) {
                    return 1;
                } else {
                    return 0;
                }
            });
            if (this.loggedIn && this.reviews.length > 0 && this.reviews[0].name === this.loggedIn.username) {
                this.reviewExistsForUser = true;
                this.buttonLabel = 'Edit Review';
            } else {
                this.reviewExistsForUser = false;
                this.buttonLabel = 'Create Review'
            }
            this.calculateOverallAverage(reviews)
        });
    }

    // uses reviews from input to calculated the overall average over all categories
    private calculateOverallAverage(reviews: review[]) {
        this.reviewAverage = {
            name: 'average',
            articleAnalysis: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleAnalysis, 0) / reviews.length,
            articleContribution: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleContribution, 0) / reviews.length,
            articleClarity: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleClarity, 0) / reviews.length,
            articleConclusion: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleConclusion, 0) / reviews.length,
            articleData: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleData, 0) / reviews.length,
            indicatorQuality: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.indicatorQuality, 0) / reviews.length
        };
        this.totalAverage = (this.reviewAverage.articleAnalysis + this.reviewAverage.articleConclusion + this.reviewAverage.articleContribution +
            this.reviewAverage.articleClarity + this.reviewAverage.articleData + this.reviewAverage.indicatorQuality) / 6;
    }

    // uses review from input to calculated the avarage
    calculateAverage(review: review) {
        return (review.articleAnalysis + review.articleConclusion + review.articleContribution +
            review.articleClarity + review.articleData + review.indicatorQuality) / 6;
    }

    // navigates to add review page
    createReview() {
        this.router.navigate([`/review/add/${this.indicator._id}`]);
    }

    // navigates to edit review page
    editReview(reviewId) {
        this.router.navigate([`review/${reviewId}/edit`], {state: {additionalInfo: {indicator: this.indicator}}});
    }

    // depending on if a review already exists for the user, the method calls the edit or create method
    addReview() {
        if (this.reviewExistsForUser) {
            this.editReview(this.reviews[0]._id)
        } else {
            this.createReview();
        }
    }

    // navigates to login-page
    logIn() {
        this.router.navigate([`/review/add/${this.indicator._id}`], {state: {additionalInfo: {indicator: this.indicator}}});
    }

    // opens Edit dialog for the superadmin
    editAsSuperAdmin(reviewId: string) {
        this.editReview(reviewId);
    }

    // deletes review from database after confirmation in the browser
    deleteAsSuperAdmin(reviewId: string) {
        if (confirm("Do you really want to delete this Review?")) {
            this.dataService.deleteReview(reviewId).subscribe(() => {
                this.getReviews();
            });
        }
    }
}
