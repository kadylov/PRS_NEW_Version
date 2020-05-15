// Angular
import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// RxJS
import {Subject, Subscription} from 'rxjs';
import {finalize, takeUntil, tap} from 'rxjs/operators';
// Auth
import {AuthNoticeService, AuthService} from '../../../core/auth';
import {User1} from '../../../core/auth/_models/user1.model';

/**
 * ! Just example => Should be removed in development
 */
// const DEMO_PARAMS = {
// 	USERNAME: 'admin',
// 	PASSWORD: '1234'
// };

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
	// Public params
	loginForm: FormGroup;
	loading = false;
	errors: any = [];

	private unsubscribe: Subject<any>;

	private wSub: Subscription;


	private returnUrl: any;
	private user: User1;

	// Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param fb: FormBuilder
	 * @param cdr
	 */
	constructor(
		private router: Router,
		private auth: AuthService,
		private authNoticeService: AuthNoticeService,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
	) {
		this.unsubscribe = new Subject();
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.initLoginForm();
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.loading = false;

		if (this.wSub) {
			this.wSub.unsubscribe();
		}
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initLoginForm() {
		// demo message to show
		/*if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Use account
			<strong>${DEMO_PARAMS.USERNAME}</strong> and password
			<strong>${DEMO_PARAMS.PASSWORD}</strong> to continue.`;
			this.authNoticeService.setNotice(initialNotice, 'info');
		}*/

		this.loginForm = this.fb.group({
			username: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
			])
			],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			]
		});
	}


	submit() {

		const controls = this.loginForm.controls;
		/** check form */
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;

		const authData = {
			username: controls['username'].value,
			password: controls['password'].value
		};

		this.wSub = this.auth.login(authData.username, authData.password)
			.subscribe(res => {

					this.user = res;

					// check whether user account is deactivated
					// display error message if user account is deactivated
					if (this.user.isActive == 0) {
						this.authNoticeService.setNotice('Error, your account has been deactivated', 'danger');
						return;
					}

					// if reviewer logged in, redirect to reviewer dashboard
					// else redirect to admin dashboard
					if (this.user.roleId != 3) {
						this.router.navigate(['reviewer/dashboard']); // Reviewer page
					} else {
						this.router.navigate(['admin/dashboard']); // Admin page

					}

					sessionStorage.setItem('user', JSON.stringify(this.user));

				},
				error => {
					this.authNoticeService.setNotice('The login detail is incorrect', 'danger');
					console.log('There was an error while retrieving User !!!' + error);
				}),
			takeUntil(this.unsubscribe),
			finalize(() => {
				this.loading = false;
				this.cdr.markForCheck();
			});

	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

}
