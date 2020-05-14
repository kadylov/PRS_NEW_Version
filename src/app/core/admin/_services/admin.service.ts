import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Reviewer, ReviewInProgressModel} from '../_models/review-in-progress.model';
import {catchError, map} from 'rxjs/operators';
import {User1} from '../../auth/_models/user1.model';
import {environment} from '../../../../environments/environment';


// const ADMIN_REQUEST = 'http://3.95.8.94/example/admin_request.php';
const ADMIN_REQUEST = environment.baseUrl + 'admin_request.php';

// const url = 'http://3.95.8.94/example/groupOfReviewers.php';
const url = environment.baseUrl + 'groupOfReviewers.php';


// const scorecardsUrls = 'http://3.95.8.94/example/scorecard.php?getReviewersScorecard=getReviewersScorecard';
const scorecardsUrls = environment.baseUrl + 'scorecard.php?getReviewersScorecard=getReviewersScorecard';


const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

@Injectable()
export class AdminService {

	constructor(private http: HttpClient) {
	}

	public submitPreReview(preReview: any): Observable<any> {
		const body = new HttpParams()
			.set(`adminReview`, '1',)
			.set(`AdminID`, preReview.AdminID.toString())
			.set(`WorkID`, preReview.WorkID.toString())
			.set(`DateReviewed`, preReview.DateReviewed)
			.set(`Decision`, preReview.Decision)
			.set(`RejectNote`, preReview.RejectNote);

		return this.http.post<any>(ADMIN_REQUEST, body, {headers: headers});
	}

	public getAllAssignedWorks(): Observable<any> {
		return this.http.get<any>(ADMIN_REQUEST, {params: {getAssignedWorks: 'getAssignedWorks'}})
			.pipe(
				map(works => {
					return this.groupReviewers(works);
				})
			);

	}

	// get a list of reviewers who were not assigned to workID
	public getReviewersForAssignment(workID: number): Observable<Reviewer[]> {
		if (workID > 0) {
			return this.http.get<Reviewer[]>(ADMIN_REQUEST, {
				params: {
					reviewersToAssign: 'reviewersToAssign',
					workID: workID.toString()
				}
			})
				.pipe(
					map(reviewers => {
						return reviewers;
					}),
					catchError(err => throwError(err))
				);
		} else {
			return null;
		}
	}

	deactivateUser(_user: User1): Observable<any> {
		// console.log(_user);
		const body = new HttpParams()
			.set(`deactivateUser`, 'deactivateUser',)
			.set(`id`, _user.id.toString())
			.set(`activeStatus`, _user.isActive.toString())
			.set(`roleId`, _user.roleId.toString());

		return this.http.post<User1>(ADMIN_REQUEST, body, {headers: headers});
	}

	assignReviewer(assignment: any): Observable<any> {
		const body = new HttpParams()
			.set(`assignReviewer`, '1',)
			.set(`adminID`, assignment.adminID.toString())
			.set(`reviewerID`, assignment.reviewerID.toString())
			.set(`workID`, assignment.workID.toString())
			.set(`dueDate`, assignment.dueDate.toString())
			.set(`dateAssigned`, assignment.dateAssigned.toString());

		return this.http.post<any>(ADMIN_REQUEST, body, {headers: headers});
	}

	assignGroupReviewers(assignment: any): Observable<ReviewInProgressModel[]> {
		return this.http.post<ReviewInProgressModel[]>(url, assignment, {headers: headers});
	}


	deactivateUserFromAssignment(reviewerID: number, workID: number) {
		const body = new HttpParams()
			.set(`deactivateFromAssignment`, '1',)
			.set(`ReviewerID`, reviewerID.toString())
			.set(`WorkID`, workID.toString());

		return this.http.post<any>(ADMIN_REQUEST, body, {headers: headers});
	}

	getUnassignedWorks(): Observable<any> {
		return this.http.get<any>(ADMIN_REQUEST, {params: {unassignedWorks: 'unassignedWorks'}});
	}

	private groupReviewers(works: any) {
		let reviewerDueDate = [];
		let assignedWorks = [];
		let group = [];
		works.forEach(work => {

			(reviewerDueDate[work.WID] = reviewerDueDate[work.WID] || []).push({
				ReviewerID: work.ReviewerID,
				ReviewerName: work.ReviewerName,
				Role: work.Role,
				DueDate: work.DueDate
			});

			if (assignedWorks[work.WID] !== null) {
				assignedWorks[work.WID] = {
					WID: work.WID,
					Title: work.Title,
					URL: work.URL,
					AuthorName: work.AuthorName,
				};

			}
		});
		assignedWorks.forEach(work => {
			work.Reviewers = reviewerDueDate[work.WID];

			group.push(work);
		});

		return group;
	}

	getReviewersScorecard(wid: string = '', status:string=''): Observable<any> {
		let params;
		if (status == 'reviewed') {
			params = {
				WID: wid,
				Status: 'reviewed'
			};
		}else {
			params = {WID: wid };
		}

		return this.http.get(scorecardsUrls, {params: params}).pipe(
			map(res => {
				if (res[0]) {
					return res;
				}
			})
		);
	}

	getAdminReview(wid: number): Observable<any> {
		return this.http.get(ADMIN_REQUEST, {
			params: {
				getAllAdminReviews: 'any',
				WID: wid.toString()
			}
		});
	}

	sendThreshold(threshold: number): Observable<any> {
		const body = new HttpParams()
			.set(`sendThreshold`, threshold.toString());
		return this.http.post<any>(ADMIN_REQUEST, body, {headers: headers})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}

	getThreshold(): Observable<number> {
		return this.http.get<number>(ADMIN_REQUEST, {params: {getThreshold: 'any'}})
			.pipe(
				map(res=>{
					return res[0]['Threshold'];
				}),
				catchError(err => { return throwError(err)})
			);
	}

	private convertToArray(str: string[]) {
		let ls: string = Object.assign(str);
		str = ls.split(',');
		return str;
	}
}
