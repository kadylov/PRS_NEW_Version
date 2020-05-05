import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Work} from '../model/work';
import {Observable, throwError} from 'rxjs';
import {TagModel} from '../../../core/author/_models/tag.model';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {DataTableWorkModel} from '../../../core/_base/layout';
import {environment} from '../../../../environments/environment';


// const url = 'http://3.95.8.94/example/work_request.php';
const url = environment.baseUrl + 'work_request.php';
const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

@Injectable({
	providedIn: 'root'
})
export class WorkService {
	constructor(private http: HttpClient) {
	}

	submit(work: Work): Observable<any> {
		const body = new HttpParams()
			.set(`postNewWork`, 'postNewWork',)
			.set(`title`, work.Title)
			.set(`dateWritten`, work.DateWritten)
			.set(`dateSubmitted`, work.DateSubmission)
			.set(`url`, work.URL)
			.set(`author`, work.AuthorName)
			.set(`email`, work.AuthorEmail)
			.set(`selectedTags`, work.SelectedTags.toString());
		return this.http.post<Work>(url, body, {headers: headers})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}

	getAllTags(): Observable<TagModel[]> {
		return this.http.get<TagModel[]>(url, {params: {getAllTags: 'getAllTags'}})
			.pipe(
				map(tags => {
					tags.forEach(tag => {
						// let ls: string = Object.assign(tag.TagList);
						// tag.TagList = ls.split(',');
						tag.TagList = this.convertToArray(tag.TagList);

					});


					return tags;
				})
			);
	}

	// getAllWorks

	public getAllWorks(): Observable<Work[]> {
		return this.http.get<DataTableWorkModel[]>(url, {params: {getAllWorks: 'getAllWorks'}}).pipe(
			map(works => {
				works.map((dtw) => {

					dtw.Tags = this.convertToArray(dtw.Tags);
				});
				return works;
			})
		);
	}

	public getWorksForPublic(): Observable<Work[]> {
		return this.http.get<DataTableWorkModel[]>(url, {params: {getWorksForPublic: 'getWorksForPublic'}}).pipe(
			retry(3),

			map(works => {
				works.map((dtw) => {

					dtw.Tags = this.convertToArray(dtw.Tags);
				});
				return works;
			})
		);
	}

	getIncomingWorks(): Observable<Work[]> {
		return this.http.get<any>(url, {params: {incommingWorks: 'any'}}).pipe(
			map(works => {

				if (works) {
					works.map((eachWork) => {

						eachWork.Tags = this.convertToArray(eachWork.Tags);
					});
					return works;
				}
			})
		);
	}


	private convertToArray(str: string[]) {
		let ls: string = Object.assign(str);
		str = ls.split(',');
		return str;
	}

	publishWork(WID: number, checked: number): Observable<any> {
		const body = new HttpParams()
			.set(`publishWork`, 'publishWork',)
			.set(`WID`, WID.toString())
			.set(`Publish`, checked.toString());

		return this.http.post(url, body, {headers: headers})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}


	updateWorkStatusByID(wid: number, status: string): Observable<any> {
		const body = new HttpParams()
			.set(`updateWorkStatus`, 'updateWorkStatus',)
			.set(`WID`, wid.toString())
			.set(`Status`, status);

		return this.http.post(url, body, {headers: headers})
			.pipe(
				catchError(err => {
					return throwError(err);
				})
			);
	}

}
