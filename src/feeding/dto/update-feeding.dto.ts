import { PartialType } from '@nestjs/swagger';
import { CreateFeedingDto } from './create-feeding.dto';
import {IsOptional} from 'class-validator'
export class UpdateFeedingDto extends PartialType(CreateFeedingDto) {
    @IsOptional()
    animal_id:string;
    @IsOptional()
    feeding_schedules:string;
    @IsOptional()
    dietary:string;
    @IsOptional()
    worker_id:string;
}
