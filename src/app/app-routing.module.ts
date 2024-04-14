import { AdvanceComponent } from './advance/advance.component';
import { NavFeatComponent } from './nav-feat/nav-feat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childRoutes } from './advance-child.routes';
const APP_ROUTES: Routes = [
  {
		path: 'basic',
		component: NavFeatComponent,
	},
  {
		path: 'advance/:username',
		component: AdvanceComponent,
		children: childRoutes
	},
	{
		path: '',
		redirectTo: '/basic',
		pathMatch: 'full'   
	},
	{
		path: '**',
		component: NavFeatComponent
	}
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
