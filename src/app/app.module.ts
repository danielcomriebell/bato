import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { InfoComponent } from './info/info.component';
import { WorkdetailComponent } from './workdetail/workdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WorkComponent,
    InfoComponent,
    WorkdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'info', component: InfoComponent },
      { path: 'home', component: HomeComponent },
      { path: 'work', component: WorkComponent },
      { path: 'work/:id', component: WorkdetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
