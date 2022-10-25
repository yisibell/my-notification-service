import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
