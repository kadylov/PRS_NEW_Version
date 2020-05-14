import {Component, Inject, Injectable, Input, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {Reviewer} from '../../../core/admin/_models/review-in-progress.model';
import {DatePipe} from '@angular/common';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {Subscription} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'kt-modal3',
	templateUrl: './reviewer-to-assign.component.html',
	styleUrls: ['./reviewer-to-assign.component.scss', '../review-in-progress/assigned-reviewers-table/assigned-reviewers-table.component.scss']
})

// this component is used as a dialog box for displaying a list of reviewers for assignment
export class ReviewerToAssignComponent implements OnInit, OnDestroy {

	@ViewChild(MatSort, {static: true}) sort: MatSort;

	dataSource: MatTableDataSource<Reviewer>;
	displayedColumns = ['id', 'fullname', 'credentialType', 'roleType', 'reviewedThisMonth', 'totalReviews', 'setDueDate'];
	selection = new SelectionModel<Reviewer>(false, []);

	due_date: FormControl = new FormControl('', [Validators.required]);

	due_date_text: string = '';

	// min date for due date
	minDate: Date = new Date(Date.now());

	subscriptions: Subscription[] = [];
	clicked: boolean[] = [];

	selectedReviewer: any;

	constructor(
		private dialogRef: MatDialogRef<ReviewerToAssignComponent>,
		// data passed from the parent component (e.g. workID, list of already selected reviewers for the workID
		@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
		private datepipe: DatePipe,
		private adminService: AdminService,
	) {
	}

	ngOnInit() {
		this.dataSource = new MatTableDataSource<Reviewer>();
		this.loadReviewers();

	}

	ngOnDestroy() {
		if (this.subscriptions.length > 0) {
			this.subscriptions.forEach(sub => sub.unsubscribe());
		}
	}


	// load a list of reviewers for assignment
	// it receives from the server a list of reviewers who are not already assigned to the current work
	loadReviewers() {

		const subsc = this.adminService.getReviewersForAssignment(this.data.workID).subscribe(
			/* below is the sample data in json that the server responds back
			[
			{
				"ReviewerID": "3",
				"ReviewerName": "reviewer3 Name",
				"Credential": "Academic",
				"Role": "Reviewer",
				"IsActive": "1",
				"Email": "kradylov@gmail.com",
				"WorkID": "4",
				"AssignedThisMonth": "0",
				"ReviewedThisMonth": "0",
				"TotalReviews": "4"
			},
			{....},
			{....}
			 ]  */

			reviewersFromServer => {

				// if reviewer list is passed from the parent component
				// then filter out the reviewers fetched from the server with the reviewers
				// that are previously selected and displayed on the table and store the result for union operation
				// back to array with name 'reviewersFromServer'

				// else just display all reviewers fetched from the server
				if (this.data!= undefined && this.data.reviewers != undefined) {
					reviewersFromServer = this.union(reviewersFromServer, this.data.reviewers[0]);
				}

				// and store the updated array(e.g. reviewersFromServer) to the table
				this.dataSource.data = reviewersFromServer;
			}
		);
		this.subscriptions.push(subsc);
	}


	// union operator for two arrays
	private union(arr1: Reviewer[], arr2: Reviewer[]) {
		arr2.forEach(r2 => {
			arr1 = arr1.filter(r1 => r1.ReviewerID !== r2.ReviewerID);
		});
		return arr1;
	}


	// close the dialog box
	// it is called when user clicks on close button in reviewer-to-assign.component.html
	close() {
		this.dialogRef.close({event: 'close', data: 'close'});
	}

	// submits selected reviewer from the list along with due date and work id to the parent component
	// it is called when user clicks on "select" button and the dialog box is closed
	selectReviewer() {

		// validate due date control
		if (this.due_date.invalid) {
			this.due_date.markAllAsTouched();
			return;
		}

		this.due_date_text = this.datepipe.transform(this.due_date.value, 'yyyy-MM-dd');
		this.dialogRef.close({
			event: 'close', assignment:
				{
					'workID': this.data.workID,
					'reviewer': this.selectedReviewer,
					'dueDate': this.due_date_text
				}
		});


	}

	/**
	 * Checking control validation
	 *
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(validationType: string) {
		if (!this.due_date) {
			return false;
		}
		const result = this.due_date.hasError(validationType) && (this.due_date.dirty || this.due_date.touched);
		return result;
	}

	// activated if user selects one of the rows of the table with list of reviewers
	// and store user selection to selectedReviewer object
	// it is called when user clicks on any rows of the table
	rowClicked(row: any) {
		this.due_date_text = '';
		this.clicked.length = 0;
		this.clicked[row.ReviewerID] = true;
		this.selectedReviewer = row;

	}

}
