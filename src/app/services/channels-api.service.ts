import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ChannelResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ChannelsApiService {
  constructor(private http: HttpClient) {}

  getChannels(): Observable<ChannelResponse> {
    return this.http.get<ChannelResponse>(
      'http://localhost:4200/assets/channels.json'
    );
  }
}
