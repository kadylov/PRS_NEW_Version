import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {MessagesRequested, NewMessageCreated} from '../../../core/reviewer/_actions/message.actions';
import * as fromReviewer from '../../../core/reviewer/_reducers';
import {Observable} from 'rxjs';
import {Message} from '../../../core/reviewer/_models/message.model';
import {DatePipe} from '@angular/common';
import {User1} from '../../../core/auth/_models/user1.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
		selector: 'kt-discussion',
		templateUrl: './discussion.component.html',
		styleUrls: ['./discussion.component.scss'],
		changeDetection: ChangeDetectionStrategy.OnPush

	}
)
export class DiscussionComponent implements OnInit {

	@Input() title: string = 'Discussion';
	@Input() workID: number;							// work id for loading messages of all assigned reviewers for this workID
	@Output() close1 = new EventEmitter<void>();		// for minimizing the discussion


	messages$: Observable<Message[]>;
	reviewer: User1;									// will be used for sending new message

	constructor(
		private store: Store<fromReviewer.ReviewerState>,
		private dialogRef: MatDialogRef<DiscussionComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: any, 			// data that is passed from in-progress component
		private datepipe: DatePipe,
	) {

		this.workID = data.workID;

	}


	// request state control to load message history for the work
	ngOnInit(): void {
		this.store.dispatch(new MessagesRequested(this.workID));
		this.loadDiscussionHistory();

		this.reviewer = JSON.parse(sessionStorage.getItem('user'));
	}

	loadDiscussionHistory() {
		this.messages$ = this.store.select(fromReviewer.getMessages);

	}

	// submits a new message to the server
	// the function is called when reviewer writes something in the textfield and then presses enter
	submit(input: any) {
		let msg = input.value;
		input.value = '';

		let newMessage: Message = {
			ReviewerID: this.reviewer.id,
			ReviewerName: this.reviewer.fullname,
			Message: msg,
			DTime: this.datepipe.transform(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss'),
			WorkID: this.workID
		};

		this.store.dispatch(new NewMessageCreated(newMessage));
	}

	// minimizes the discussion dialog box
	close() {
		this.dialogRef.close({event: 'close', data: 'close'});
	}
}
