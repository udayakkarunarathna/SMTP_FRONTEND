import { SendMailComponent } from './send-mail/send-mail.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListHeaderListComponent } from './list-header-list/list-header-list.component';
import { MailConfigComponent } from './mail-config/mail-config.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mail-conf', component: MailConfigComponent },
  { path: 'header-list', component: ListHeaderListComponent },
  { path: 'header', component: ListHeaderComponent },
  {path: 'send-mail', component: SendMailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
