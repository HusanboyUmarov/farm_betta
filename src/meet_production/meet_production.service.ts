import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeetProductionDto } from './dto/create-meet_production.dto';
import { UpdateMeetProductionDto } from './dto/update-meet_production.dto';
import { MeetProduction, MeetProductionDocument } from './schemas/meet_production.schema';

@Injectable()
export class MeetProductionService {
  constructor(
    @InjectModel(MeetProduction.name) private meetModel: Model<MeetProductionDocument>
  ){}
  create(createMeetProductionDto: CreateMeetProductionDto) {
    return this.meetModel.create(createMeetProductionDto);
  }

  findAll() {
    return this.meetModel.find();
  }

  findOne(id: number) {
    return this.meetModel.findById(id);
  }

  async update(id: number, updateMeetProductionDto: UpdateMeetProductionDto) {
    const result = await this.meetModel.findByIdAndUpdate({id}, updateMeetProductionDto)
    return result;
  }

  remove(id: number) {
    return this.meetModel.findByIdAndDelete({id});
  }
}
