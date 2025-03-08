import { SmtpService } from './../service/smtp.service';
import { Component, OnInit } from '@angular/core';
import { ListHeaderModel } from '../models/list-header.model';

@Component({
  selector: 'app-list-header-list',
  templateUrl: './list-header-list.component.html',
  styleUrls: ['./list-header-list.component.css'],
})
export class ListHeaderListComponent implements OnInit {
  listHeaderList: ListHeaderModel[] = [];

  constructor(private _service: SmtpService) {}

  ngOnInit(): void {
    this.getHeaderList();
  }

  getHeaderList() {
    this._service.getListHeaderList().subscribe({
      next: (data) => {
        this.listHeaderList = data;
        console.log(this.listHeaderList);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Complete getHeaderList');
      },
    });
  }
}
