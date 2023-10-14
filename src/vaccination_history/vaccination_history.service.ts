import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { VaccinationHistory, VaccinationHistoryDocument } from './schemas/vaccination_history.entity';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationHistory.name) private modelVaccina_his: Model<VaccinationHistoryDocument>
  ){}
  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.modelVaccina_his.create(createVaccinationHistoryDto);
  }

  findAll() {
    return this.modelVaccina_his.find();
  }

  findOne(id: string) {
    return this.modelVaccina_his.findById(id);
  }

  update(id: string, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return this.modelVaccina_his.findOneAndUpdate({id}, updateVaccinationHistoryDto);
  }

  remove(id: string) {
    return this.modelVaccina_his.findByIdAndDelete(id);
  }
}
