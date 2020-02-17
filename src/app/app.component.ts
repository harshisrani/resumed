import {Component} from '@angular/core';
import './style/cv-popup.less';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style/chatbot.css']
})
export class AppComponent {
  currentTitle = '';
  siteTitleKey = 'site.title';
  siteTitle = '';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private translate: TranslateService,
  ) {
    const defLng = 'en';
    const lngList = ['en', 'zh-tw', 'zh-cn'];
    translate.addLangs(lngList);
    translate.setDefaultLang(defLng);
    const browserLang: string = translate.getBrowserLang();
    const preferLang: string = sessionStorage.getItem('language');
    if (preferLang) {
      translate.use(preferLang);
    } else {
      translate.use(browserLang);
      sessionStorage.setItem('language', browserLang);
    }
    this.translatepage();
  }

  translatepage() {
    this.translate.get(this.siteTitleKey).subscribe((res: string) => {
      this.siteTitle = res;
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get(this.siteTitleKey).subscribe((res: string) => {
        this.siteTitle = res;
        if (this.currentTitle) {
          this.translate.get(this.currentTitle).subscribe((res: string) => {
            this.titleService.setTitle(res + ' | ' + this.siteTitle);
          });
        } else {
          this.titleService.setTitle(this.siteTitle);
        }
      });
    });
  }

  //Chatbot on all pages
  openForm() {
    const chatbotform = document.getElementById('chatbotForm');
    if (chatbotform.style.display !== 'block') {
      chatbotform.style.display = 'block';
    } else {
      chatbotform.style.display = 'none';
    }
  }
}
