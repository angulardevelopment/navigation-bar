import { AdvanceComponent } from './advance/advance.component';
import { BasicComponent } from './basic/basic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childRoutes } from './advance-child.routes';
const APP_ROUTES: Routes = [
  {
		path: 'basic',
		component: BasicComponent,
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
		component: BasicComponent
	}
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
