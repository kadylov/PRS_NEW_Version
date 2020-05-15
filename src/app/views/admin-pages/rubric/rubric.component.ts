import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RubricService} from '../../../core/rubric/_service/rubric.service';
import {RubricModel} from '../../../core/rubric/_model/rubric.model';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
	selector: 'kt-rubric',
	templateUrl: './rubric.component.html',
	styleUrls: ['./rubric.component.scss'],
	encapsulation: ViewEncapsulation.None,

})
export class RubricComponent implements OnInit, OnDestroy {

	rubricForm: FormGroup = null;
	rubrics: RubricModel[] | null;

	confMsg: string = '';
	alertType: string = 'success';

	private _success = new Subject<string>();

	subscribtions: Subscription[] = [];

	constructor(
		private fb: FormBuilder,
		private ref: ChangeDetectorRef,
		private rubricService: RubricService,
	) {

		const subsc = this.rubricService.getScorecardRubric().subscribe(
			res => {
				this.rubrics = res;
				this.initForm();
			}
		);

		this.subscribtions.push(subsc);
	}

	ngOnInit(): void {

		// display a confirmation message for 2 seconds
		this._success.subscribe(msg => this.confMsg = msg);
		this._success.pipe(
			debounceTime(2000)
		).subscribe(() => {
			this.confMsg = '';
			this.ref.markForCheck();
		});

	}

	ngOnDestroy(): void {
		if (this.subscribtions.length > 0) {
			this.subscribtions.forEach(sub => sub.unsubscribe());
		}
	}



	// collects and submit modified rubrics by user to the server
	submit() {

		const controls = this.rubricForm.controls;

		// validate user input
		if (this.rubricForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		const subsc = this.rubricService.submitUpdatedRubric(this.rubrics).subscribe(
			res => {

				this.alertType = 'success';
				this._success.next('Rubric has been updated succcessfully.');
				this.ref.markForCheck();

			},
			error => {
				this.alertType = 'danger';
				this._success.next('Error. Rubric has not been updated.');
				this.ref.markForCheck();
			},
		);

		window.scrollTo(0,0);
		this.subscribtions.push(subsc);


	}

	// initialize form controls for the textfields
	initForm() {
		let group = {};
		this.rubrics.forEach(r => {
			group[r.RubricID] = new FormControl('', [
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(120)
			]);

		});
		this.rubricForm = new FormGroup(group);

		this.ref.markForCheck();

	}


	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string | number, validationType: string): boolean {
		const control = this.rubricForm.controls[controlName];
		if (!control) {
			return false;
		}
		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
