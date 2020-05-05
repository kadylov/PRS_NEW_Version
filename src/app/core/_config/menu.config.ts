export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					alignment: 'left',
					page: '/admin/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Assignments',
					root: true,
					alignment: 'left',
					page: '/admin/assignment',
				},
				{
					title: 'Works',
					root: true,
					alignment: 'left',
					page: '/admin/allworks',

				},
				{
					title: 'Members',
					root: true,
					alignment: 'left',
					page: '/admin/user-management',

				},

			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/admin/dashboard',
					bullet: 'dot',
				},
				// {
				// 	title: 'Incoming Works', // <= Title of the page
				// 	root: true,
				// 	page: '/admin/incoming-work', // <= URL
				// 	icon: 'flaticon-line-graph' // <= Choose the icon class
				// },
				// {
				// 	title: 'Assignments', // <= Title of the page
				// 	root: true,
				// 	page: '/admin/assignment', // <= URL
				// 	icon: 'flaticon-line-graph' // <= Choose the icon class
				// },
				{
					title: 'Assignments', // <= Title of the page
					root: true,
					page: '/admin/assignment', // <= URL
					icon: 'flaticon-line-graph' // <= Choose the icon class
				},
				// {
				// 	title: 'In-Progress', // <= Title of the page
				// 	root: true,
				// 	page: '/admin/in-progress', // <= URL
				// 	icon: 'flaticon-line-graph' // <= Choose the icon class
				// },
				{
					title: 'Reviews In Progress', // <= Title of the page
					root: true,
					page: '/admin/review-in-progress', // <= URL
					icon: 'flaticon-line-graph' // <= Choose the icon class
				},
				{
					title: 'Completed Reviews', // <= Title of the page
					root: true,
					page: '/admin/completed-review', // <= URL
					icon: 'flaticon-line-graph' // <= Choose the icon class
				},
				{
					title: 'Works', // <= Title of the page
					root: true,
					page: '/admin/allworks', // <= URL
					icon: 'flaticon-line-graph' // <= Choose the icon class
				},


				{section: 'Members'},
				// {
				// 	title: 'Members',
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-list-2',
				// 	root: true,
				// 	permission: 'accessToECommerceModule',
				// },
				{
					title: 'User Management',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Users',
							page: '/admin/user-management/users'
						},
					]
				},

				{section: 'Database'},
				// {
				// 	title: 'Members',
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-list-2',
				// 	root: true,
				// 	permission: 'accessToECommerceModule',
				// },
				{
					title: 'Export/Import Database',
					root: true,
					page: '/admin/export-import-db', // <= URL
					icon: 'flaticon-open-box',
				},

				{section: 'Project'},
				// {
				// 	title: 'Members',
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-list-2',
				// 	root: true,
				// 	permission: 'accessToECommerceModule',
				// },
				{
					title: 'Scorecard Rubric',
					root: true,
					page: '/admin/rubric', // <= URL
					icon: 'flaticon-open-box',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
