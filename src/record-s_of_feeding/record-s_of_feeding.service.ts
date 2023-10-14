import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { runInThisContext } from 'vm';
import { CreateRecordSOfFeedingDto } from './dto/create-record-s_of_feeding.dto';
import { UpdateRecordSOfFeedingDto } from './dto/update-record-s_of_feeding.dto';
import { RecordSOfFeeding, RecordFeedingSchema, RecordFeedingDocument} from './schemas/record-s_of_feeding.schema';

@Injectable()
export class RecordSOfFeedingService {
  constructor(
    @InjectModel(RecordSOfFeeding.name)  private modelRecord: Model<RecordFeedingDocument>
  ){}
  create(createRecordSOfFeedingDto: CreateRecordSOfFeedingDto) {
    return this.modelRecord.create(createRecordSOfFeedingDto);
  }

  findAll() {
    return this.modelRecord.find();
  }

  findOne(id: string) {
    return this.modelRecord.findById(id);
  }

  update(id: string, updateRecordSOfFeedingDto: UpdateRecordSOfFeedingDto) {
    return this.modelRecord.findByIdAndUpdate({id}, updateRecordSOfFeedingDto);
  }

  remove(id: string) {
    return this.modelRecord.findByIdAndDelete(id);
  }
}
