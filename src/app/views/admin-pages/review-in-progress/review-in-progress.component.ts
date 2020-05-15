import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ReviewInProgressModel} from '../../../core/admin/_models/review-in-progress.model';
import {AdminService} from '../../../core/admin/_services/admin.service';


@Component({
		selector: 'kt-review-in-progress',
		templateUrl: './review-in-progress.component.html',
		styleUrls: ['../assignment/assignment1.component.scss']
	}
)
export class ReviewInProgressComponent implements OnInit {

	reviewInProgress$: Observable<ReviewInProgressModel[]>;

	constructor(private adminService: AdminService) {}

	ngOnInit(): void {
		this.reviewInProgress$ = this.adminService.getAllAssignedWorks();

		/* sample data in json is returned from the server below and stored in reviewInProgress$
		[ {
			WID: "35"
			Title: "Prevalence of Articles With Honorary Authors and Ghost Authors in Peer-Reviewed Medical Journals"
			URL: "https://jamanetwork.com/journals/jama/article-abstract/187772"
			AuthorName: "Annette Flanagin, RN, MA; Lisa A. Carey, PhD;"
			Reviewers: [ {
							DueDate: "2019-11-21"
							ReviewerID: "69"
							ReviewerName: "Daug Williams"
							Role: "Reviewer"
						},
						{
							DueDate: "2019-11-21"
							ReviewerID: "69"
							ReviewerName: "Daug Williams"
							Role: "Reviewer"
						},
						{...},
						{...}
						....
					  ]
			},
			{...},
			{...}
		]
		*
		* */
	}
}
