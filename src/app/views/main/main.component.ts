import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
	selector: 'kt-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection:ChangeDetectionStrategy.OnPush
})
// This component is for displaying top panel (e.g. header) of public page
export class MainComponent implements OnInit, OnDestroy {

	title: string = 'The Highest Scored Works';

	subscription:Subscription;

	ngOnInit() {
	}

	ngOnDestroy(){
		if (this.subscription !== undefined) {
			this.subscription.unsubscribe();
		}
	}

	constructor(private router: Router) {
		this.subscription= this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationEnd) {

					switch (event.url) {
						case '/contact':
						case '/about':
							this.title = 'About Peer Review System Application';
							break
						default:
							this.title = 'The Highest Scored Works';

					}
				}
			})

	}

}
