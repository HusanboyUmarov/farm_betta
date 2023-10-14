import { Module } from '@nestjs/common';
import { RecordSOfFeedingService } from './record-s_of_feeding.service';
import { RecordSOfFeedingController } from './record-s_of_feeding.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordSOfFeeding, RecordFeedingSchema } from './schemas/record-s_of_feeding.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:RecordSOfFeeding.name, schema:RecordFeedingSchema }])],
  controllers: [RecordSOfFeedingController],
  providers: [RecordSOfFeedingService],
})
export class RecordSOfFeedingModule {}
