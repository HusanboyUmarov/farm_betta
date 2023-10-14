import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { Feeding, FeedingDocument } from './schema/feeding.schema';

@Injectable()
export class FeedingService {
  constructor(
    @InjectModel(Feeding.name) private modelFeeding: Model<FeedingDocument>
  ){}
  create(createFeedingDto: CreateFeedingDto) {
    return this.modelFeeding.create(createFeedingDto);
  }

  findAll() {
    return this.modelFeeding.find();
  }

  findOne(id: string) {
    return this.modelFeeding.findById(id);
  }

  update(id: string, updateFeedingDto: UpdateFeedingDto) {
    return this.modelFeeding.findOneAndUpdate({id}, updateFeedingDto);
  }

  remove(id: string) {
    return this.modelFeeding.findByIdAndDelete(id);
  }
}
