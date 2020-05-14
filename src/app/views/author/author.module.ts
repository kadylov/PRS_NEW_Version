// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Material
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDividerModule,
	MatFormFieldModule, MatGridListModule, MatIconModule,
	MatInputModule,
	MatSelectModule, MatSliderModule
} from '@angular/material';
import { AuthorComponent } from './author.component';
import {SubmissionFormComponent} from './submission-form/submission-form.component';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { FocusDirective } from './directive/focus.directive';

const routes: Routes = [
	{
		path: '',
		component: AuthorComponent,
		children: [
			{
				path: '',
				redirectTo: 'submission',
				pathMatch: 'full'
			},
			{
				path: 'submission',
				component: SubmissionFormComponent,
			},

		]
	}
];


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		RouterModule.forChild(routes),
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatAutocompleteModule,
		MatSelectModule,
		MatDatepickerModule,
		MatChipsModule,
		MatIconModule,
		MatDividerModule,
		NgbTabsetModule,
		MatGridListModule,
		MatSliderModule,
	],
	providers: [
		DatePipe
	],
	exports: [AuthorComponent],
	declarations: [
		AuthorComponent,
		SubmissionFormComponent,
		FocusDirective,
	],

})

export class AuthorModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthorModule,
			providers: [
			]
		};
	}
}
