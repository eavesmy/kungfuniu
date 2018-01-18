import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { GroundComponent } from './ground/ground.component';
import { ProjectComponent } from './project/project.component';

const router = [
	{
		path: '',
		pathMath: 'full',
		component: HomeComponent
	},
	
	{
		path: 'introduce',
		pathMath: 'full',
  		component: IntroduceComponent 
		
	},

	{
		path: 'ground',
		pathMath: 'full',
		component: GroundComponent
	},

	{
		path: 'project',
		pathMath: 'full',
		component: ProjectComponent
	}
]

export const appRouting = RouterModule.forRoot(router)
