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

	// submit author work to the server
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

	// fetch tags from server for displaying them on the work submission form
	getAllTags(): Observable<TagModel[]> {
		return this.http.get<TagModel[]>(url, {params: {getAllTags: 'getAllTags'}})
			.pipe(
				map(tags => {
					tags.forEach(tag => {
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

	// fetch all scored works for public view
	// it is called in public page
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

	// fetch incoming works for admin pre-review
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

	// converts strings that are comma separated into array
	private convertToArray(str: string[]) {
		let ls: string = Object.assign(str);
		str = ls.split(',');
		return str;
	}

	// make work available for public view
	// it is used in admin's 'all works' component
	// where sliders are used for publishing work
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


	// sends new work status to the server (e.g. completed, rejected)
	// it is called in "Completed Reviews" tab, where admin makes a final decision
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
