import { Module } from '@nestjs/common';
import { MeetProductionService } from './meet_production.service';
import { MeetProductionController } from './meet_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetProduction, MeetSchema } from './schemas/meet_production.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:MeetProduction.name, schema:MeetSchema}])],
  controllers: [MeetProductionController],
  providers: [MeetProductionService],
})
export class MeetProductionModule {}
