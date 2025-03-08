import { SmtpService } from './../service/smtp.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})
export class SendMailComponent implements OnInit {
  constructor(
    private _service: SmtpService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  sendMails() {
    this._spinner.show();
    this._service.sendMails().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this._spinner.hide();
        console.error(err);
      },
      complete: () => {
        this._spinner.hide();
        console.log('Complete SendMails');
        alert('Send Mails Successfully!');
      },
    });
  }
}
