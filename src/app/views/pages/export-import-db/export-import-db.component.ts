import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {saveAs} from 'file-saver';
import {FileBackupService} from '../../../core/file-service/file-backup.service';
import {Subject, Subscription} from 'rxjs';
import {debounce, debounceTime, finalize} from 'rxjs/operators';

const backup_file_name = 'prs_backup.sql';

@Component({
	selector: 'kt-backupDb',
	templateUrl: './export-import-db.component.html',
	styleUrls: ['./export-import-db.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExportImportDbComponent implements OnInit, OnDestroy {

	@ViewChild('fileSelected', {static: true})
	fileInput: ElementRef;

	file: File = null;
	disableUploadBtn: boolean = true;
	confMsg: string = '';
	alertType: string = 'success';


	private _success = new Subject<string>();

	uploadResponse = {status: '', message: ''};
	error: string = '';
	uploading: boolean = false;
	downloading: boolean = false;

	subscribtions: Subscription[] = [];

	constructor(
		private ref: ChangeDetectorRef,
		private fileBackupService: FileBackupService) {
	}

	ngOnInit(): void {

		// display alert (toaster) notification for 2 seconds
		// after one of the two buttons (upload or download) triggers event
		this._success.subscribe(msg => this.confMsg = msg);
		this._success.pipe(
			debounceTime(2000)
		).subscribe(() => {
			this.confMsg = '';
			this.ref.markForCheck();
		});
	}

	ngOnDestroy(): void {
		if (this.subscribtions.length > 0) {
			this.subscribtions.forEach(sub => sub.unsubscribe());
		}
	}

	download() {
		this.downloading = true;
		let sub = this.fileBackupService.download()
			.subscribe(res => {
					this.downloading = false;
					this.ref.markForCheck();
					saveAs(res, backup_file_name);
				},
			);

		this.subscribtions.push(sub);

	}


	// enables upload button after user chooses the backup sql file
	// from the user's local computer
	fileChange(fileSelected: any) {
		if (fileSelected.target.files.length > 0) {
			this.file = <File> fileSelected.target.files[0];
			this.disableUploadBtn = false;
		} else {
			this.disableUploadBtn = true;
		}
	}

	// uploads the chosen sql file to the server
	// and triggers alert(toaster) notification
	upload() {
		if (this.file != null) {
			this.uploading = true;

			let formData = new FormData();
			formData.append('prs_backup', this.file);

			let sub = this.fileBackupService.upload(formData).subscribe(
				res => {
					this.file = null;

					this.alertType = 'success';
					this._success.next('The database has been restored succcessfully.');
					this.fileInput.nativeElement.value = '';
					this.uploading = false;
					this.disableUploadBtn = true;
					this.ref.markForCheck();

				},
				error => {
					this.alertType = 'danger';
					this._success.next('Error. The database has not been restored.');
					this.uploading = false;
					this.ref.markForCheck();

				},
			);

			this.subscribtions.push(sub);

		}
	}

}
