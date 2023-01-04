import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "native-i18n";
  siteLanguage = 'English';
  
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' }
  ];
  
  constructor(private service: TranslocoService) { 
    this.service.selectTranslate('app-name').subscribe(value => {this.title = value});
  }
  
  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    this.service.selectTranslate('app-name').subscribe(value => {this.title = value});
    this.siteLanguage = this.languageList.find(f => f.code === language)?.label || 'English';
  }
}
