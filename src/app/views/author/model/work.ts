export class Work {
	WID?: number;
	Title: string;
	URL: string;
	DateSubmission: string;
	DateWritten: string;
	IsRetired?: string;
	Status?: string;
	AuthorName?: string;
	AuthorEmail?: string;
	SelectedTags?: string[] = [];
	Tags?: string[] = [];
	RSID?: number;
	Score?: number;
	Publish?: number;
}
