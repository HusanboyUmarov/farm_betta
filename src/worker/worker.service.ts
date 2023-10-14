import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Speciality, SpecialityDocument } from '../speciality/schemas/speciality.schema';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker, WorkerDocument } from './schemas/worker.schem';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name) private workerModel:Model<WorkerDocument>,
    @InjectModel(Speciality.name) private specialModel:Model<SpecialityDocument>,

  ){}
  async create(createWorkerDto: CreateWorkerDto) {
    const {speciality_id} = createWorkerDto ;
    console.log(createWorkerDto)

    const spec = await this.specialModel.findById(speciality_id)

    if(!spec) throw new BadRequestException('Bunday mutaxasis yoq')

    const worker = await this.workerModel.create(createWorkerDto);
    spec.workers.push(worker)
    await spec.save()

    return worker

  }

  findAll() {
    return `This action returns all worker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
