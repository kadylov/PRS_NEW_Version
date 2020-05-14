import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {WorkService} from '../../core/work/service/work.service';
import {Work} from '../../core/work/model/work';

@Component({
	selector: 'kt-public-page',
	templateUrl: './public-page.component.html',
	styleUrls: ['./public-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicPageComponent implements OnInit, OnDestroy {
	title: string = 'The Highest Scored Works';

	displayedColumns = ['Tags', 'Title', 'AuthorName', 'Score'];
	dataSource: MatTableDataSource<Work>;
	works: any = [];

	wSub: Subscription;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;


	constructor(private workService: WorkService) {
		this.dataSource = new MatTableDataSource();

	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.loadWorks();
	}

	ngOnDestroy(): void {
		this.wSub.unsubscribe();
	}

	// it is used for search box
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}


	// loads all highest scored works from the server for public view
	loadWorks() {
		this.wSub = this.workService.getWorksForPublic()
			.subscribe(
				res => {
					this.dataSource.data = res;
					this.dataSource.sort = this.sort;
					this.dataSource.paginator = this.paginator;
				},
				error => {
					console.log('There was an error while retrieving Posts !!!' + error);
				});
	}
}
