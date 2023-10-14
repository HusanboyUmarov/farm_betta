import { PartialType } from '@nestjs/swagger';
import { CreateRecordSOfFeedingDto } from './create-record-s_of_feeding.dto';
import {IsOptional} from 'class-validator'
export class UpdateRecordSOfFeedingDto extends PartialType(CreateRecordSOfFeedingDto) {
    @IsOptional()
    date:Date;
    @IsOptional()
    consumption:string;
    @IsOptional()
    feeding:string;
}
