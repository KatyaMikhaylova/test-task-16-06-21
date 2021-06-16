import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Channel } from '../../models';
import { ChannelsApiService } from '../../services/channels-api.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss'],
})
export class ChannelsListComponent implements OnInit, OnDestroy {
  channels: Channel[];
  total: number;

  private destroyed$ = new Subject();

  constructor(private channelsApi: ChannelsApiService) {}

  ngOnInit(): void {
    this.channelsApi
      .getChannels()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.channels = data.channelDetails;
        this.total = data.total;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
