import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent }      from './index/index.component';
import { FooterComponent }      from './footer/footer.component';
import { ExpertiseComponent } from './index/expertise/expertise.component';
import { SuccessesComponent } from './index/successes/successes.component';
import { HeaderComponent } from './index/header/header.component';
import { ExperienceComponent } from './index/experience/experience.component';
import { EducationComponent } from './index/education/education.component';
import { ProjectsComponent } from './index/projects/projects.component';
import { ContactComponent } from './index/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    RecaptchaV3Module,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    ExpertiseComponent,
    SuccessesComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LdfhNkaAAAAAKs83avzU0JgtkSPidPOLfcPW4xA" }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas, far, fab);
  }
}