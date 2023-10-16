import { PartialType } from '@nestjs/swagger';
import { CreateMeetProductionDto } from './create-meet_production.dto';

export class UpdateMeetProductionDto extends PartialType(CreateMeetProductionDto) {}
