import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../../../../core/admin/_services/admin.service';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {LayoutUtilsService, MessageType} from '../../../../core/_base/crud';

@Component({
	selector: 'kt-set-threshold',
	templateUrl: './set-threshold.component.html',
	styles: [`
		.example-margin {
			margin: 10px;
		}
	`],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetThresholdComponent implements OnInit, OnDestroy {

	// value for setting threshold
	value: number = 55;
	thresholdControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]);

	subscription:Subscription[]=[];

	constructor(private location: Location,
				private ref: ChangeDetectorRef,
				private layoutUtilsService: LayoutUtilsService,
				private adminService: AdminService

	) {
	}

	ngOnInit() {

		// load the value for the threshold from the server
		// and assign it to the variable with name 'value'
		this.subscription.push(this.adminService.getThreshold().subscribe(res=>{
			if (res) {
				this.value= res;
				this.ref.markForCheck();
			}
		}));
	}

	ngOnDestroy(): void {
		if (this.subscription.length>0) {
			this.subscription.forEach(sub=>{sub.unsubscribe()});
		}
	}

	onSubmit(b: boolean) {

		// validate user input for the threshold
		if (this.thresholdControl.invalid) {
			this.thresholdControl.markAllAsTouched();
			return;
		}




		// submit new value for the threshold to the server
		// display a confirmation message if there is no error from the server
		this.subscription.push(this.adminService.sendThreshold(this.value).subscribe(
			() => {
				const message = `Threshold has been updated successfully`;
				this.layoutUtilsService.showActionNotification(message, MessageType.Update, 4000, false, false);

				this.location.back();
			},

			error => {
				console.log(error);
			}
		));
	}

	isControlHasError(validationType: string): boolean {
		if (!this.thresholdControl) {
			return false;
		}
		const result = this.thresholdControl.hasError(validationType) && (this.thresholdControl.dirty || this.thresholdControl.touched);
		return result;
	}
}
