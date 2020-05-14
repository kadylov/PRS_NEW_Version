import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {RubricModel} from '../_model/rubric.model';
import {environment} from '../../../../environments/environment';


// const url = 'http://3.95.8.94/example/rubric.php';
const url = environment.baseUrl + 'rubric.php';
const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});


@Injectable()
export class RubricService {


	constructor(private http: HttpClient) {
	}

	getScorecardRubric(): Observable<RubricModel[]> {
		return this.http.get<RubricModel[]>(url, {responseType: 'json'})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}

	submitUpdatedRubric(rubric: RubricModel[]) {
		return this.http.put(url, rubric);
	}
}
