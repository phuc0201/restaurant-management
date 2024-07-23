import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: Socket;
  config: SocketIoConfig = {
    url: 'http://localhost:8080/socket', options: {
      reconnection: true
    }
  };
  constructor() {

  }

  connect() {
    this.socket = new Socket(this.config);
    this.socket.connect();
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  listenEvent(event: string): Observable<string> {
    return this.socket.fromEvent<string>(event);
  }
}
