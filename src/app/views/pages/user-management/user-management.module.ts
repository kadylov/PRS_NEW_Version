// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../partials/partials.module';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService} from '../../../core/_base/crud';
// Shared
import {ActionNotificationComponent} from '../../partials/content/crud';
// Components
import { UserManagementComponent } from './user-management.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule, MatSlideToggleModule
} from '@angular/material';
import {
	usersReducer,
	UserEffects, AuthGuard, Role
} from '../../../core/auth';
import {UserManagementService} from './service/user-management.service';
import {RoleCredentialService} from './service/role-credential.service';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

const routes: Routes = [
	{
		path: '',
		component: UserManagementComponent,
		children: [
			{
				path: '',
				redirectTo: 'users',
				pathMatch: 'full'
			},
			{
				path: 'users',
				component: UsersListComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'users:id',
				component: UsersListComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'users/add',
				component: UserEditComponent,
				canActivate: [AuthGuard],
				data: { roles: [ Role.Admin] }
			},
			{
				path: 'users/add:id',
				component: UserEditComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'users/edit',
				component: UserEditComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
			{
				path: 'users/edit/:id',
				component: UserEditComponent,
				canActivate: [AuthGuard],
				data: { roles: [Role.Admin] }
			},
		]
	}
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        PartialsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('users', usersReducer),
        EffectsModule.forFeature([UserEffects]),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule,
        MatSlideToggleModule,
        PerfectScrollbarModule
    ],
	providers: [
		InterceptService,
		{
        	provide: HTTP_INTERCEPTORS,
       	 	useClass: InterceptService,
			multi: true
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		AuthGuard,
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService,
		UserManagementService,
		RoleCredentialService,
	],
	entryComponents: [
		ActionNotificationComponent,
		// RoleEditDialogComponent
	],
	declarations: [
		UserManagementComponent,
		UsersListComponent,
		UserEditComponent,
	]
})
export class UserManagementModule {}
