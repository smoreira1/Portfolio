import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';





import { AppRoutingModule } from './app-routing.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { SoftPageComponent } from './soft-page/soft-page.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { SampleProjectsComponent } from './sample-projects/sample-projects.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'applications', component: ApplicationPageComponent },
  { path: 'programming', component: ProgrammingPageComponent },
  { path: 'soft', component: SoftPageComponent },
  { path: 'projects', component: SampleProjectsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    AboutPageComponent,
    ApplicationPageComponent,
    ProgrammingPageComponent,
    SoftPageComponent,
    PortfolioFooterComponent,
    SampleProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    CdkTableModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

