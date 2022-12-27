import { Inject, Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = $localize`:@@title:native-i18n`;
  locales = [
    { code: 'en-US', name: 'English' },
    { code: 'ar', name: 'عربي (Arabic)' },
  ];

  constructor(@Inject(LOCALE_ID) public activeLocale: string = 'en-US') {}

  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }
}
