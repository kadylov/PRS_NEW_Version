import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';
import {environment} from '../../../environments/environment';


// const downloadUrl = 'http://3.95.8.94/example/download_request.php';
const downloadUrl = environment.baseUrl + 'download_request.php';

// const uploadUrl = 'http://3.95.8.94/example/upload_request.php';
const uploadUrl = environment.baseUrl + 'upload_request.php';


@Injectable()
export class FileBackupService {

	constructor(private http: HttpClient) {
	}

	// upload(formData: FormData):Observable<any> {
	// 	return this.http.post(uploadUrl, formData);
	// }

	upload(formData: FormData): Observable<any> {
		return this.http.post(uploadUrl, formData)
			.pipe(
				catchError(error => {
					return throwError(error);
				})
			);
		/*return this.http.post(uploadUrl, formData, {
			reportProgress: true,
			observe: 'events'
		}).pipe(
			map(event => {
				switch (event.type) {

					case HttpEventType.UploadProgress:
						const progress = Math.round(100 * event.loaded / event.total);
						return {status: 'progress', message: progress};

					case HttpEventType.Response:
						return event.body;

					default:
						return `Unhandled event: ${event.type}`;

				}
			})
		);*/
	}

	download(): Observable<any> {
		return this.http.get(downloadUrl, {responseType: 'blob'});
	}
}
