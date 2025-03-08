import { Component } from '@angular/core';
import {
  faBars,
  faCogs,
  faEnvelopeOpen,
  faPowerOff,
  faSearch,
  faTachometerAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NRRC-Front';
  languageText: any;

  faBars = faBars;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faTachometerAlt = faTachometerAlt;
  faCogs = faCogs;
  faPowerOff = faPowerOff;
  faMail = faEnvelopeOpen;

  constructor() {}

  changeLanguage() {
    // if (this.languageText == LanguageTextEnum.NATIVE) {
    //   this.nrrcBiService.setLanguage(LanguageIdEnum.FOREIGN);
    //   this.languageText = LanguageTextEnum.FOREIGN;
    // } else {
    //   this.nrrcBiService.setLanguage(LanguageIdEnum.NATIVE);
    //   this.languageText = LanguageTextEnum.NATIVE;
    // }
  }
}
