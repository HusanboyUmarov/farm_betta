import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetProductionService } from './meet_production.service';
import { CreateMeetProductionDto } from './dto/create-meet_production.dto';
import { UpdateMeetProductionDto } from './dto/update-meet_production.dto';

@Controller('meet-production')
export class MeetProductionController {
  constructor(private readonly meetProductionService: MeetProductionService) {}

  @Post()
  create(@Body() createMeetProductionDto: CreateMeetProductionDto) {
    return this.meetProductionService.create(createMeetProductionDto);
  }

  @Get()
  findAll() {
    return this.meetProductionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetProductionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetProductionDto: UpdateMeetProductionDto) {
    return this.meetProductionService.update(+id, updateMeetProductionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetProductionService.remove(+id);
  }
}
