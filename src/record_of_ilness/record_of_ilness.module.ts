import { Module } from '@nestjs/common';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { RecordOfIlnessController } from './record_of_ilness.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordOfIlness } from './models/record_of_ilness.model';
import { RecordFeedingSchema } from '../record-s_of_feeding/schemas/record-s_of_feeding.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:RecordOfIlness.name, schema:RecordFeedingSchema}])],
  controllers: [RecordOfIlnessController],
  providers: [RecordOfIlnessService],
})
export class RecordOfIlnessModule {}
