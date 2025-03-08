import { SmtpService } from './../service/smtp.service';
import { Component, OnInit } from '@angular/core';
import { EmailConfigModel } from '../models/email-config.model';

@Component({
  selector: 'app-mail-config',
  templateUrl: './mail-config.component.html',
  styleUrls: ['./mail-config.component.css'],
})
export class MailConfigComponent implements OnInit {
  emailConfigModel: EmailConfigModel = {
    emailSettingId: 0,
    emailHost: '',
    emailUserName: '',
    emailPassword: '',
    emailProtocol: '',
    emailPort: '',
    emailAddress: '',
    senderName: '',
  };

  constructor(private _service: SmtpService) {}

  ngOnInit(): void {
    this.getEmailConfigurations();
  }

  getEmailConfigurations() {
    this._service.getEmailConfig().subscribe({
      next: (data) => {
        this.emailConfigModel = data[0];
        console.log(this.emailConfigModel);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete getEmailConfigurations');
      },
    });
  }

  clickUpdateMailConfig() {
    if (confirm('Please confirm the update...')) {
      this._service.updateEmailConfig(this.emailConfigModel).subscribe({});
    }
  }
}
