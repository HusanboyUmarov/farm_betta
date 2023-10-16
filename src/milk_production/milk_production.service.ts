import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { MilkProduction, MilkProductionDocument } from './models/milk_production.model';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name) private milkModel: Model<MilkProductionDocument>
  ){}
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.milkModel.find();
  }

  findOne(id: string) {
    return this.milkModel.findById(id);
  }

  update(id: string, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkModel.findByIdAndUpdate({id}, updateMilkProductionDto);
  }

  remove(id: string) {
    return this.milkModel.findByIdAndUpdate(id);
  }
}
