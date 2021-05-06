import { AdvanceComponent } from './advance/advance.component';
import { BasicComponent } from './basic/basic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childRoutes } from './advance-child.routes';
const routes: Routes = [
  {
		path: 'basic',
		component: BasicComponent
	},
  {
		path: 'advance/:username',
		component: AdvanceComponent,
		children: childRoutes
	},
	{
		path: '',
		redirectTo: '/basic',
		pathMatch: 'full'    //we can also use prefix, full here
	},
	{
		path: '**',
		component: BasicComponent
	}
]

@NgModule({
  imports: [	RouterModule.forRoot(routes, { useHash: true })],  //optional usehash],
  exports: [RouterModule]
})
export class AppRoutingModule { }
