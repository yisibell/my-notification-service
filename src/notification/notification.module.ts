import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EventsGateway } from '../events/events.gateway';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, EventsGateway],
})
export class NotificationModule {}
