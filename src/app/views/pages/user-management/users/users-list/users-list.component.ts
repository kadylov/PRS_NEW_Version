// Angular
import {
	Component,
	OnInit,
	ElementRef,
	ViewChild,
	ChangeDetectionStrategy,
	OnDestroy,
	ChangeDetectorRef
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// Material
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatSnackBar} from '@angular/material';
// RXJS
import {debounceTime, distinctUntilChanged, tap, skip, take, delay} from 'rxjs/operators';
import {fromEvent, merge, Observable, of, Subscription} from 'rxjs';
// LODASH
import {each, find} from 'lodash';
// NGRX

// Services
import {LayoutUtilsService, MessageType, QueryParamsModel} from '../../../../../core/_base/crud';
// Models
import {SubheaderService} from '../../../../../core/_base/layout';
import {UserManagementService} from '../../service/user-management.service';
import {MatTableDataSource} from '@angular/material/table';
import {User1} from '../../../../../core/auth/_models/user1.model';
import {RoleCredentialService} from '../../service/role-credential.service';

// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
@Component({
	selector: 'kt-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnDestroy {
	// Table fields
	dataSource: MatTableDataSource<User1>;
	displayedColumns = ['id', 'username', 'email', 'fullname', '_roles', 'actions'];
	users: any = [];
	active;

	userStatus: string[] = [];

	color = 'warn';


	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

	// Filter fields
	@ViewChild('searchInput', {static: true}) searchInput: ElementRef;
	lastQuery: QueryParamsModel;

	// Subscriptions
	private subscriptions: Subscription[] = [];

	/**
	 *
	 * @param activatedRoute: ActivatedRoute
	 * @param router: Router
	 * @param layoutUtilsService: LayoutUtilsService
	 * @param subheaderService: SubheaderService
	 * @param cdr
	 * @param userlistService
	 */
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private layoutUtilsService: LayoutUtilsService,
		private subheaderService: SubheaderService,
		private cdr: ChangeDetectorRef,
		private userManagementService: UserManagementService,
		private roleCredentialService: RoleCredentialService,
	) {

		this.dataSource = new MatTableDataSource();
	}


	/**
	 * On init
	 */
	ngOnInit() {

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.loadUsers();
		this.getAllRolesAndCredentials();
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	getAllRolesAndCredentials() {
		const subsc = this.roleCredentialService.getRolesAndCredentialsList()
			.subscribe(respond => {

					// console.log('loadcredds()', respond['roles']);
					sessionStorage.setItem('roleCredential', JSON.stringify(respond));
				},
				error => console.log('There was an error while retrieving roles and credentials !!!' + error));

		this.subscriptions.push(subsc);
	}

	deleteUser(_item: User1) {
		const _title: string = 'User Delete';
		const _description: string = 'Are you sure to permanently delete this user?';
		const _waitDesciption: string = 'User is deleting...';
		const _deleteMessage = `User has been deleted`;


		const subsc = this.userManagementService.deleteUser(_item)
			.subscribe(res => {
					this.layoutUtilsService.showActionNotification(_deleteMessage);

					this.dataSource.data = this.dataSource.data.filter(user => user.id !== _item.id);

				},
				error => {
					console.log('Error ', error);
					this.layoutUtilsService.showActionNotification('Unable to delete the user');
				});
		this.subscriptions.push(subsc);

	}



	/**
	 * Redirect to edit page
	 *
	 * @param id
	 */
	editUser(id, user?: User1) {
		this.userManagementService.setUser(user);
		this.router.navigate(['../users/edit', id], {relativeTo: this.activatedRoute});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	private loadUsers() {
		const subsc = this.userManagementService.getAllUsers()
			.subscribe(respond => {

					// console.log('loadUsers()');
					// console.log(respond);
					this.dataSource.data = respond;
					this.dataSource.sort = this.sort;
					this.dataSource.paginator = this.paginator;
				},
				error => console.log('There was an error while retrieving users !!!' + error));

		this.subscriptions.push(subsc);
	}

	/**
	 * Returns prepared data for save
	 */
	private prepareUser(user: User1): User1 {
		const _user = new User1();
		_user.clear();
		_user.id = user.id;
		_user.username = user.username;
		_user.email = user.email;
		_user.fullname = user.fullname;
		_user.password = user.password;
		_user.roleId = user.roleId;

		_user.credentialID = user.credentialID;
		_user.isActive=user.isActive;
		return _user;
	}

	slideChanged(event: any, user: User1) {
		let checkedUser: User1 = this.prepareUser(user);

		if (event.checked) {
			checkedUser.isActive = 1;
		} else {
			checkedUser.isActive = 0;
		}

		const subsc = this.userManagementService.deactivateUser(checkedUser)
			.subscribe(res => {
					if (checkedUser.isActive) {
						this.layoutUtilsService.showActionNotification_(`User has been activated`);
					} else {
						this.layoutUtilsService.showActionNotification_(`User has been deactivated`);
					}

				},
				error => {
					console.log('Error ', error);
					this.layoutUtilsService.showActionNotification_('Unable to deactivate the user');
				});
		this.subscriptions.push(subsc);

	}
}
