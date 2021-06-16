import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/models';

@Component({
  selector: 'app-channels-list-item',
  templateUrl: './channels-list-item.component.html',
  styleUrls: ['./channels-list-item.component.scss'],
})
export class ChannelsListItemComponent implements OnInit {
  @Input() channel: Channel;

  get backgroundImage(): string {
    return `url(${this.channel.picture.backgrounds[0]})`;
  }

  constructor() {}

  ngOnInit(): void {}
}
