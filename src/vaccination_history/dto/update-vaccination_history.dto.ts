import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateVaccinationHistoryDto } from './create-vaccination_history.dto';

export class UpdateVaccinationHistoryDto extends PartialType(CreateVaccinationHistoryDto) {
    @IsOptional()
    animal_id: string;
    @IsOptional()
    vaccine_type_id:string;
    @IsOptional()
    vaccinated_date:Date;
    @IsOptional()
    next_vaccianated_date:Date;
    @IsOptional()
    worker_id:string;
}
