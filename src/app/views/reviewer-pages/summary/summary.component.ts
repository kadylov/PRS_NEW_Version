import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
		selector: 'kt-summary',
		templateUrl: './summary.component.html',
		styleUrls: ['./summary.component.scss'],
		changeDetection: ChangeDetectionStrategy.OnPush

	}
)
export class SummaryComponent implements OnInit{


	constructor() {
	}

	ngOnInit() {
	}
}
