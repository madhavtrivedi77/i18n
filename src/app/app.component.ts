import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title!: String;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'ar', 'fr'])
    translate.setDefaultLang('en-US');
    translate.use('en-US');
    translate.get('project-name').subscribe((projectName: string) => {
        this.title = projectName;
    });
  }

  change(val: any){
    this.translate.use(val)
    this.translate.get('project-name').subscribe((projectName: string) => {
      this.title = projectName;
    });
  }
  
}
