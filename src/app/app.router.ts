import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';

const router : Router = [
	{
		path: '/',
		pathMath: 'full',
		component: HomeComponent
	},
	
	{
		path: '/introduce',
		pathMath: 'full',
  		component: IntroduceComponent 
		
	}

];

export const appRouting = RouterModule.forRoot(router)
