import { SmtpService } from './../service/smtp.service';
import { ListHeaderModel } from './../models/list-header.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css'],
})
export class ListHeaderComponent implements OnInit {
  listHeaderModel: ListHeaderModel = {
    cmmListId: 0,
    cmmListDescFrn: '',
    cmmListDescNtv: '',
    toEmail: '',
    ccEmail: '',
    bccEmail: '',
    activeFlag: false,
  };
  listId!: string;
  isEditMode: boolean = false;

  constructor(private _route: ActivatedRoute, private _service: SmtpService) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.listId = params['id'];
      if (this.listId != undefined) {
        this.isEditMode = true;
        this.getListHeaderModel(this.listId);
      }
    });
  }

  getListHeaderModel(listId: string) {
    this._service.getListHeaderById(listId).subscribe({
      next: (data) => {
        this.listHeaderModel = data;
        console.log(this.listHeaderModel);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Complete getListHeaderModel');
      },
    });
  }

  clickUpdateListHeader() {
    console.log(this.listHeaderModel);

    this._service.updateListHeader(this.listHeaderModel).subscribe({});
  }

  clickCreateListHeader() {
    this._service.createListHeader(this.listHeaderModel).subscribe({
      next: (data) => {},
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Complete createListHeader');
      },
    });
  }
}
