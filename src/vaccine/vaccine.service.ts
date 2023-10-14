import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { Vaccine, VaccineDocument } from './schema/vaccine.schema';

@Injectable()
export class VaccineService {

  constructor(
    @InjectModel(Vaccine.name) private modelVac: Model<VaccineDocument>
  ){}
  create(createVaccineDto: CreateVaccineDto) {
    return this.modelVac.create(createVaccineDto);
  }

  findAll() {
    return this.modelVac.find();
  }

  findOne(id: string) {
    return this.modelVac.findById(id);
  }

  update(id: string, updateVaccineDto: UpdateVaccineDto) {
    return  this.modelVac.findByIdAndUpdate({id}, updateVaccineDto)
  }

  remove(id: string) {
    return this.modelVac.findByIdAndDelete(id);
  }
}
