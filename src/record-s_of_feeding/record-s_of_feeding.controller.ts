import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordSOfFeedingService } from './record-s_of_feeding.service';
import { CreateRecordSOfFeedingDto } from './dto/create-record-s_of_feeding.dto';
import { UpdateRecordSOfFeedingDto } from './dto/update-record-s_of_feeding.dto';

@Controller('record-s-of-feeding')
export class RecordSOfFeedingController {
  constructor(private readonly recordSOfFeedingService: RecordSOfFeedingService) {}

  @Post()
  create(@Body() createRecordSOfFeedingDto: CreateRecordSOfFeedingDto) {
    return this.recordSOfFeedingService.create(createRecordSOfFeedingDto);
  }

  @Get()
  findAll() {
    return this.recordSOfFeedingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordSOfFeedingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordSOfFeedingDto: UpdateRecordSOfFeedingDto) {
    return this.recordSOfFeedingService.update(id, updateRecordSOfFeedingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordSOfFeedingService.remove(id);
  }
}
