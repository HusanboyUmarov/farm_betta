import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { Speciality, SpecialityDocument } from './schemas/speciality.schema';

@Injectable()
export class SpecialityService {

  constructor(
    @InjectModel(Speciality.name) private specModel: Model<SpecialityDocument>
  ){}
  create(createSpecialityDto: CreateSpecialityDto) {
    console.log(createSpecialityDto)
    return this.specModel.create(createSpecialityDto);
  }

  findAll() {
    return this.specModel.find().populate('workers');
  }


  findOne(id: number) {
    return `This action returns a #${id} speciality`;
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return `This action updates a #${id} speciality`;
  }

  remove(id: number) {
    return `This action removes a #${id} speciality`;
  }
}
