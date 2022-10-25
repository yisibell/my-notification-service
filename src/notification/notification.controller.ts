import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventsGateway } from '../events/events.gateway';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly eventsGateway: EventsGateway,
    private readonly notificationService: NotificationService,
  ) {}

  @Get('test')
  test() {
    return this.notificationService.fireTest();
  }

  @Post('fire')
  fire(@Body() data) {
    return this.notificationService.fire(this.eventsGateway, data);
  }
}
