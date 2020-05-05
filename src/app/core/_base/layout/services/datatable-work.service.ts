import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

// models
import {DataTableWorkModel} from '../models/datatable-work.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, retry, tap} from 'rxjs/operators';
import {Work} from '../../../../views/author/model/work';

// const API_DATATABLE_URL = 'api/works'
const API_DATATABLE_URL = 'http://3.95.8.94/example/index.php';
const WORK_URL = 'http://3.95.8.94/example/work_request.php';

@Injectable()
export class DataTableWorkService {


	constructor(private http: HttpClient) {
	}


	public getAllWorks(): Observable<DataTableWorkModel[]> {
		return this.http.get<DataTableWorkModel[]>(API_DATATABLE_URL, {params: {scoredWorks: 'scoredWorks'}}).pipe(
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
		return this.http.get<any>(WORK_URL, {params: {incommingWorks: 'any'}}).pipe(
			map(works => {
				works.map((eachWork) => {

					eachWork.Tags = this.convertToArray(eachWork.Tags);
				});
				return works;
			})
		);
	}


	private convertToArray(str: string[]) {
		let ls: string = Object.assign(str);
		str = ls.split(',');
		return str;
	}

}

