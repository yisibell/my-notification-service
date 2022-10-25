import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class NotificationService {
  fireTest() {
    return 'notification fired successful!';
  }

  fire(eventsGateway: EventsGateway, data: any) {
    eventsGateway.emitMessage(data);

    return data;
  }
}
