import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';


@Component({
	selector: 'kt-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit{


	title:string = 'About Peer Review System Application';

	ngOnInit() {
	}

}
