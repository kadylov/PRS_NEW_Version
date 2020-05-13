import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../../../../core/admin/_services/admin.service';
import {Location} from '@angular/common';

@Component({
	selector: 'kt-set-threshold',
	templateUrl: './set-threshold.component.html',
	styles: [`
		.mat-slider {
			width: 75%;
		}

		.example-h2 {
			margin: 10px;
		}

		.example-section {
			display: flex;
			align-content: center;
			align-items: center;
			height: 60px;
		}

		.example-margin {
			margin: 10px;
		}

		.mat-slider-horizontal {
			width: 300px;
		}

		.mat-slider-vertical {
			height: 300px;
		}
	`]
})
export class SetThresholdComponent implements OnInit, OnDestroy {

	value: number = 55;			// value for setting threshold
	thresholdControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]);

	constructor(private location: Location,
				private adminService: AdminService) {
	}

	ngOnInit() {
	}

	ngOnDestroy(): void {
	}

	onSubmit(b: boolean) {

		// check from control
		if (this.thresholdControl.invalid) {
			this.thresholdControl.markAllAsTouched();
			return;
		}

		console.log(this.value);

		this.adminService.sendThreshold(this.value).subscribe(
			() => {
				this.location.back();
			},

			error => {
				console.log(error);
			}
		);


	}

	isControlHasError(validationType: string): boolean {
		if (!this.thresholdControl) {
			return false;
		}
		const result = this.thresholdControl.hasError(validationType) && (this.thresholdControl.dirty || this.thresholdControl.touched);
		return result;
	}
}
