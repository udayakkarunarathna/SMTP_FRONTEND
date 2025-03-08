import { EmailConfigModel } from './../models/email-config.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListHeaderModel } from '../models/list-header.model';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SmtpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getEmailConfig(): Observable<EmailConfigModel[]> {
    return this.http.get<EmailConfigModel[]>(
      `${baseUrl}/EmailConfig`,
      this.httpOptions
    );
  }

  getEmailConfigBySettingId(settingId: string): Observable<EmailConfigModel> {
    return this.http.get<EmailConfigModel>(
      `${baseUrl}/EmailConfig/${settingId}`,
      this.httpOptions
    );
  }

  updateEmailConfig(mailConfigModel: EmailConfigModel) {
    return this.http.put<EmailConfigModel>(
      `${baseUrl}/EmailConfig`,
      mailConfigModel,
      this.httpOptions
    );
  }

  addEmailConfig(mailConfigModel: EmailConfigModel) {
    return this.http.post<EmailConfigModel>(
      `${baseUrl}/EmailConfig`,
      mailConfigModel,
      this.httpOptions
    );
  }

  getListHeaderList() {
    return this.http.get<ListHeaderModel[]>(
      `${baseUrl}/ListHeader`,
      this.httpOptions
    );
  }

  getListHeaderById(listId: string) {
    return this.http.get<ListHeaderModel>(
      `${baseUrl}/ListHeader/${listId}`,
      this.httpOptions
    );
  }

  updateListHeader(listHeaderModel: ListHeaderModel) {
    return this.http.put<ListHeaderModel>(
      `${baseUrl}/ListHeader`,
      listHeaderModel,
      this.httpOptions
    );
  }

  createListHeader(listHeaderModel: ListHeaderModel) {
    return this.http.post<ListHeaderModel>(
      `${baseUrl}/ListHeader`,
      listHeaderModel,
      this.httpOptions
    );
  }

  sendMails() {
    return this.http.post(`${baseUrl}/SendMail`, this.httpOptions);
  }
}
