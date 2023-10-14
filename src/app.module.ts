import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config"
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { SpecialityModule } from './speciality/speciality.module';
import { WorkerModule } from './worker/worker.module';
import { BlocksModule } from './blocks/blocks.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { FeedingModule } from './feeding/feeding.module';
import { RecordSOfFeedingModule } from './record-s_of_feeding/record-s_of_feeding.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    SpecialityModule,
    WorkerModule,
    BlocksModule,
    VaccinationHistoryModule,
    VaccineModule,
    FeedingModule,
    RecordSOfFeedingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
