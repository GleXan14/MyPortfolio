import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectSectionComponent } from './views/project-section/project-section.component';
import { HeaderSectionComponent } from './views/header-section/header-section.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SkillSectionComponent } from './views/skill-section/skill-section.component';
import { AboutSectionComponent } from './views/about-section/about-section.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavbarComponent } from './views/side-navbar/side-navbar.component';
import { FooterComponent } from './views/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    HeaderSectionComponent,
    NavbarComponent,
    SkillSectionComponent,
    AboutSectionComponent,
    SideNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
