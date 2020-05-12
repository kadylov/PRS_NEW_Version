import {Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
	LayoutConfigService,
} from '../../../core/_base/layout';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'kt-reviewer-dashboard',
	templateUrl: './r_dashboard.component.html',
	styleUrls: ['./r_dashboard.component.scss']
})
export class R_DashboardComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}
}
