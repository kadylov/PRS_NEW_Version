import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ReviewHistory} from '../_models/review-history.model';
import {Assignment} from '../_models/assignment.model';
import {Message} from '../_models/message.model';
import {environment} from '../../../../environments/environment';


const API_REVIEWER_URL = environment.baseUrl + 'reviewer_request.php';
const summaryURL = environment.baseUrl + 'summary.php';
const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

@Injectable()
export class ReviewerService {
	constructor(private http: HttpClient) {
	}

	// fetch all review history made by the current user
	getAllReviews(): Observable<any> {
		let user = JSON.parse(sessionStorage.getItem('user'));

		const body = new HttpParams()
			.set(`reviewHistory`, 'reviewHistory')
			.set(`ReviewerID`, user.id);

		return this.http.get<ReviewHistory[]>(API_REVIEWER_URL, {
			params: {
				reviewHistory: 'reviewHistory',
				ReviewerID: user.id
			}
		});

	}

	// fetches new assignment for the reviewer to review
	getCurrentAssignment(reviewerID: number): Observable<any> {
		return this.http.get<Assignment[]>(API_REVIEWER_URL, {
			params: {
				listAssignments: 'assignedWorks',
				ReviewerID: reviewerID.toString()
			}
		});
	}

	// fetches review history of the reviewer
	getAssignmentHistory(reviewerID: number): Observable<any> {
		return this.http.get<Assignment[]>(API_REVIEWER_URL, {
			params: {
				assignmentHistory: 'assignmentHistory',
				ReviewerID: reviewerID.toString()
			}
		});
	}

	// fetches messages made by other reviewers in the discussion for the work
	getMessageHistory(workID: number): Observable<Message[]> {
		return this.http.get<Message[]>(API_REVIEWER_URL, {
			params: {
				getDiscussions: 'getDiscussions',
				WorkID: workID.toString()
			}
		}).pipe(
			map(res => {
				if (res == null) {
					return [];
				} else {
					return res;
				}
			}),

			catchError(err => {
				return throwError(err);
			})
		);
	}

	// submits new message that reviewer typed in the discussion
	postNewMessage(message: Message): Observable<any> {
		//WorkID, ReviewerID, Message, DTime
		console.log('New msg:', message);
		const body = new HttpParams()
			.set(`postNewMessage`, 'postNewMessage')
			.set(`WorkID`, message.WorkID.toString())
			.set(`ReviewerID`, message.ReviewerID.toString())
			.set(`Message`, message.Message)
			.set(`DTime`, message.DTime);
		return this.http.post<any>(API_REVIEWER_URL, body, {headers: headers});
	}

	// sends scores from the
	sendScores(WID, reviewerID, q1Value, q2Value, q3Value,
			   q4Value, q5Value, q6Value, q7Value, q8Value,
			   q9Value, q10Value, q11Value, q12Value, cValue,
			   rcomment) {
		const body = new HttpParams()
			.set(`saveScorecard`, 'saveScorecard')
			.set(`WID`, WID)
			.set(`ReviewerID`, reviewerID.toString())
			.set(`q1Value`, q1Value)
			.set(`q2Value`, q2Value)
			.set(`q3Value`, q3Value)
			.set(`q4Value`, q4Value)
			.set(`q5Value`, q5Value)
			.set(`q6Value`, q6Value)
			.set(`q7Value`, q7Value)
			.set(`q8Value`, q8Value)
			.set(`q9Value`, q9Value)
			.set(`q10Value`, q10Value)
			.set(`q11Value`, q11Value)
			.set(`q12Value`, q12Value)
			.set(`totalScore`, cValue)
			.set(`ReviewerComment`, rcomment);

		return this.http.post<any>(API_REVIEWER_URL, body, {headers: headers});
	}

	// fetches scorecard of the current reviewer
	getScorecard(wid: number, reviewerID: number): Observable<any> {
		return this.http.get<any>(API_REVIEWER_URL, {
			params: {
				getScorecardForWork: 'any',
				WID: wid.toString(),
				ReviewerID: reviewerID.toString()
			}
		})
			.pipe(
				map(res => {
					if (res) {
						return res[0];
					} else {
						return null;
					}
				}),

				catchError(err => {
					return throwError(err);
				})
			);
	}


	// submit generated lead's reviewer summary
	sendSummary(summary: { LeadID: number; WorkID: any; WorkFinalScore: number; SummaryText: string }): Observable<any> {
		return this.http.post(summaryURL, summary);
	}


	// fetch reviewer comment from the scorecard
	getReviewerComment(workID, reviewerID): Observable<any> {
		return this.http.get(API_REVIEWER_URL, {params: {getScorecardComment: 'any',WorkID: workID, ReviewerID: reviewerID}})
			.pipe(
				map(res => {
					if (res) {
						return res[0]['ReviewerComment'];
					} else {
						return '';
					}
				}),
				catchError(err => {
					return throwError(err);
				})
			);
	}
}
