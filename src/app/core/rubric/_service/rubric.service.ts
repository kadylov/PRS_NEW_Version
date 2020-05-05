import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {RubricModel} from '../_model/rubric.model';


const url = 'http://3.95.8.94/example/rubric.php';
const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});


@Injectable()
export class RubricService {


	constructor(private http: HttpClient) {
	}

	getScorecardRubric(): Observable<RubricModel[]> {
		return this.http.get<RubricModel[]>(url,{responseType: 'json'})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}

	submitUpdatedRubric(rubric: RubricModel[]) {
		return this.http.put(url, rubric);
	}

	// sendEmail(email: Email): Observable<any> {
	// 	const body = new HttpParams()
	// 		.set(`contactMessage`, 'contactMessage',)
	// 		.set(`senderName`, email.senderName)
	// 		.set(`senderEmail`, email.senderEmail)
	// 		.set(`subject`, email.subject)
	// 		.set(`message`, email.message)
	// 		.set(`canReply`, email.canReply.toString());
	// 	return this.http.post<any>(url, body, {headers: headers})
	// 		.pipe(
	// 			catchError(err => {
	// 				return throwError(err);
	// 			})
	// 		);
	// }

	// send email to author about any progress of the submitted work

}
