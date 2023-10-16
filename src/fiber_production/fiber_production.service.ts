import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { FiberProduction, FiberProductionDocument } from './models/fiber_production.model';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(FiberProduction.name) private fiberModel: Model<FiberProductionDocument>
  ){}
  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.fiberModel.find();
  }

  findOne(id: string) {
    return this.fiberModel.findById(id);
  }

  update(id: string, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.fiberModel.findByIdAndUpdate({id}, updateFiberProductionDto);
  }

  remove(id: string) {
    return this.fiberModel.findByIdAndDelete({id});
  }
}
