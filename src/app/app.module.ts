import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {RightcolumnComponent} from './layout/rightcolumn/rightcolumn.component';
import {FooterComponent} from './layout/footer/footer.component';
import {WorkingexperienceComponent} from './component/workingexperience/workingexperience.component';
import {PersonalinfoComponent} from './component/personalinfo/personalinfo.component';
import {SkillsetComponent} from './component/skillset/skillset.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ContactmeComponent} from './component/contactme/contactme.component';
import {SelfdescriptionComponent} from './component/selfdescription/selfdescription.component';
import {PopupComponent} from './layout/popup/popup.component';
import {MainpageComponent} from './layout/mainpage/mainpage.component';
import {AppTranslationModule} from './app.translation.module';
import {ChatbotComponent} from './component/chatbot/chatbot.component';
import {TechnologyComponent} from './component/technology/technology.component';
import {AboutComponent} from './component/about/about.component';
import {QualificationComponent} from './component/qualification/qualification.component';
import {EducationComponent} from './component/education/education.component';

import {PopupService} from './service/popup-service/popup.service';
import {ApiService} from './service/api-service/api.service';
import {ReadjsonfileService} from './service/readjsonfile-service/readjsonfile.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RightcolumnComponent,
    FooterComponent,
    WorkingexperienceComponent,
    PersonalinfoComponent,
    SkillsetComponent,
    NavbarComponent,
    ContactmeComponent,
    SelfdescriptionComponent,
    PopupComponent,
    MainpageComponent,
    ChatbotComponent,
    TechnologyComponent,
    AboutComponent,
    QualificationComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppTranslationModule.forRoot(),
  ],
  providers: [
    PopupService,
    ApiService,
    ReadjsonfileService,
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
],
  bootstrap: [AppComponent]
})

export class AppModule {
}
