import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsListComponent } from './components/channels-list/channels-list.component';
import { NoContentComponent } from './components/no-content/no-content.component';

const routes: Routes = [
  { path: '', component: NoContentComponent },
  { path: 'list', component: ChannelsListComponent },
  { path: 'no-content', component: NoContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
