import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { NotificationFireDto } from './dto/notification-fire.dto';

@Injectable()
export class NotificationService {
  fireTest() {
    return 'notification fired successful!';
  }

  fire(eventsGateway: EventsGateway, data: NotificationFireDto) {
    eventsGateway.emitMessage(data);

    return data;
  }
}
