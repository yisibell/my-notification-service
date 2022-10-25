import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  // socket.io 服务端实例
  @WebSocketServer()
  server: Server;

  // 订阅客户端消息
  @SubscribeMessage('message')
  handleMessage(): string {
    return 'Hello world!';
  }

  // 向客户端发送消息
  emitMessage(data: any) {
    this.server.emit('message', data);
  }
}
