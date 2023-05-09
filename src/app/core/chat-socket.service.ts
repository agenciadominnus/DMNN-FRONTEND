import { Injectable } from '@angular/core';

import { SocketIoConfig, Socket } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'https://dmnn-backend.onrender.com',
  options: {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: localStorage.getItem('CapacitorStorage.token'),
        },
      },
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class ChatSocketService extends Socket {
  constructor() {
    super(config);
  }
}
