import { SmtpService } from './service/smtp.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MailConfigComponent } from './mail-config/mail-config.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListHeaderListComponent } from './list-header-list/list-header-list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MailConfigComponent,
    ListHeaderListComponent,
    ListHeaderComponent,
    SendMailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [SmtpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
