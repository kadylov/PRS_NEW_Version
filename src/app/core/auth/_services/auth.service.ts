// Angular
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
// RxJS
import {Observable, of, forkJoin, throwError, Subject} from 'rxjs';
import {map, catchError, mergeMap, tap} from 'rxjs/operators';
// Lodash
import {filter, some, find, each} from 'lodash';
// Environment
import {environment} from '../../../../environments/environment';
// CRUD
import { HttpUtilsService} from '../../_base/crud';
// Models
import {User1} from '../_models/user1.model';

const API_USER_URL = environment.baseUrl+'index.php';

@Injectable()
export class AuthService {

	private user: User1;

	private subject: Subject<any> = new Subject<any>();

	constructor(private http: HttpClient,
				private httpUtils: HttpUtilsService,
				) {
	}

	login(username: string, password: string): Observable<User1> {

		const body = new HttpParams()
			.set(`userLogin`, 'userLogin',).set(`username`, username).set(`password`, password);
		const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
		// return this.http.post<User1>(API_USER_URL, body.toString(), {headers});

		return this.http.post<User1>(API_USER_URL, body.toString(), {headers, observe: 'response'})
			.pipe(
				map(response => {
					return response.body[0];
				}),
				catchError(error => {
					return throwError(error);
				}));
	}


	// CREATE =>  POST: add a new user to the server
	createUser(user: User1): Observable<User1> {
		const httpHeaders = new HttpHeaders();
		// Note: Add headers if needed (tokens/bearer)
		httpHeaders.set('Content-Type', 'application/json');
		return this.http.post<User1>(API_USER_URL, user, {headers: httpHeaders});
	}

	// READ
	getAllUsers(): Observable<User1[]> {
		return this.http.get<User1[]>(API_USER_URL);
	}

	getUser(username: string, password: string): Observable<HttpResponse<User1>> {
		const body = new HttpParams()
			.set(`userLogin`, 'userLogin',).set(`username`, username).set(`password`, password);
		const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
		return this.http.post<User1>(API_USER_URL, body.toString(), {headers, observe: 'response'});

	}

	getAllUsers1(): Observable<User1[]> {
		return this.http.get<User1[]>(API_USER_URL);
	}



	private handleError<T>(operation = 'operation', result?: any) {
		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result);
		};
	}
}
