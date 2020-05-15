// Angular
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [

	// Public user
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', loadChildren: () => import('app/views/main/main.module').then(m => m.MainModule)},

	// Login page
	{path: 'auth', loadChildren: () => import('app/views/auth/auth.module').then(m => m.AuthModule)},

	// Author Page
	{path: 'author', loadChildren: () => import('app/views/author/author.module').then(m => m.AuthorModule)},

	// Reviewer Page
	{path: 'reviewer', loadChildren: () => import('app/views/reviewer-pages/r_pages.module').then(m => m.ReviewerPagesModule)},

	// Admin Page
	{path: 'admin', loadChildren: () => import('app/views/admin-pages/pages.module').then(m => m.PagesModule)},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
