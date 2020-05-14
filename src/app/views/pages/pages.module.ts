// Angular
import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';

import { UserManagementModule } from './user-management/user-management.module';
import { IncomingWorkComponent } from './admin/incoming-work/incoming-work.component';
import { AssignmentComponent } from './admin/assignment/assignment.component';
import { ScorecardComponent } from './admin/scorecard/scorecard.component';

import {
    MatButtonModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatPaginatorModule, MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule, MatSlideToggleModule,
    MatSortModule,
    MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from '../theme/base/base.component';
import {ThemeModule} from '../theme/theme.module';
import {IncomingDatatable} from './admin/incoming-datatable/incomingDatatable.component';
import {ReviewInProgressComponent} from './review-in-progress/review-in-progress.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AssignedListComponent} from './review-in-progress/assigned-works/assigned-work.component';
import {ReviewerToAssignComponent} from './reviewersToAssign/reviewer-to-assign.component';
import {LayoutUtilsService} from '../../core/_base/crud';
import {ActionNotificationComponent} from '../partials/content/crud';
import {ExportImportDbComponent} from './export-import-db/export-import-db.component';
import {AssignmentComponent1} from './assignment/assignment1.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PreReviewComponent} from './pre-review/pre-review.component';
import {AllWorksComponent} from './all-works/all-works.component';
import {RubricComponent} from './rubric/rubric.component';
import {CompletedReviewComponent} from './completed-review/completed-review.component';
import {SummaryViewComponent} from './completed-review/summary-view/summary-view.component';
import {AuthGuard, Role} from '../../core/auth';
import {SetThresholdComponent} from './admin/set-threshold/set-threshold.component';
import {WorkSummaryComponent} from './completed-review/work-summary-table/work-summary.component';

const routes:Routes=[
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			},

			{
				path: 'incoming-work',
				component: IncomingWorkComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'assignment',
				component: AssignmentComponent1,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'review',
				component: PreReviewComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }

			},
			{
				path: 'scorecard',
				component: ScorecardComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			// {
			// 	path: 'result',
			// 	component: ResultComponent
			// },

			{
				path: 'review-in-progress',
				component: ReviewInProgressComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'completed-review',
				component: CompletedReviewComponent,
				canActivate: [AuthGuard],
				data: { roles: [ Role.Admin] }
			},
			{
				path: 'summary',
				component: SummaryViewComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'allworks',
				component: AllWorksComponent,
				canActivate: [AuthGuard],
				data: { roles: [ Role.Admin] }
			},

			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'user-management',
				loadChildren: () => import('app/views/pages/user-management/user-management.module').then(m => m.UserManagementModule)
			},
			{
				path: 'export-import-db',
				component: ExportImportDbComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'rubric',
				component: RubricComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'threshold',
				component: SetThresholdComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},


			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
]

@NgModule({
	declarations: [
		IncomingWorkComponent,
		AssignmentComponent,
		ScorecardComponent,
		CompletedReviewComponent,
		IncomingDatatable,
		ReviewInProgressComponent,
		AssignedListComponent,
		ReviewerToAssignComponent,
		ExportImportDbComponent,
		AssignmentComponent1,
		DashboardComponent,
		PreReviewComponent,
		AllWorksComponent,
		RubricComponent,
		WorkSummaryComponent,
		SummaryViewComponent,
		SetThresholdComponent

	],
	entryComponents: [
		ReviewerToAssignComponent,
		ActionNotificationComponent,
		WorkSummaryComponent,
	],

	exports: [WorkSummaryComponent,
	],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),  //////
        HttpClientModule,
        FormsModule,
        CoreModule,
        PartialsModule,
        UserManagementModule,
        MatRadioModule,
        MatFormFieldModule,
        ThemeModule,
        MatSliderModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        PerfectScrollbarModule,
        NgbModule,
        MatExpansionModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSlideToggleModule,
    ],
	providers: [
		DatePipe,
		LayoutUtilsService,
		AuthGuard,
	],

})
export class PagesModule {
}
