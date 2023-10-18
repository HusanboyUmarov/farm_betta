import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { RecordOfIlness, RecordOfItemsDocument, RecordSchema } from './models/record_of_ilness.model';

@Injectable()
export class RecordOfIlnessService {
  constructor(
    @InjectModel(RecordOfIlness.name) private recordModel: Model<RecordOfItemsDocument>
  ){}

  create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    return this.recordModel.create(createRecordOfIlnessDto);
  }

  
  findAll() {
    return this.recordModel.find();
  }

  findOne(id: string) {
    return this.recordModel.findById(id);
  }

  update(id: string, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    return this.recordModel.findByIdAndUpdate({id}, updateRecordOfIlnessDto);
  }

  remove(id: string) {
    return this.recordModel.findByIdAndDelete({id});
  }
}
