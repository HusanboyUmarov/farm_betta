import { Module } from '@nestjs/common';
import { MilkProductionService } from './milk_production.service';
import { MilkProductionController } from './milk_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MilkProduction, MilkSchema } from './models/milk_production.model';

@Module({
  imports:[MongooseModule.forFeature([{name:MilkProduction.name, schema:MilkSchema}])], 
  controllers: [MilkProductionController],
  providers: [MilkProductionService],
})
export class MilkProductionModule {}
