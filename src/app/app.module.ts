import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IntroduceComponent } from './introduce/introduce.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent
  ],
  imports: [
    BrowserModule,
	appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
