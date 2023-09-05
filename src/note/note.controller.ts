import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('api/notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto, @Res() response) {
    const note = await this.noteService.create(createNoteDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'Success',
      note,
    });
  }

  @Get()
  async findAll(@Res() response) {
    const notes = await this.noteService.findAll();
    return response.status(HttpStatus.OK).json({
      message: 'Success',
      notes,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    const note = await this.noteService.findOne(id);
    if (!note) {
      throw new NotFoundException('Not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Success',
      note,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id,
    @Body() updateNote: UpdateNoteDto,
    @Res() response,
  ) {
    const note = await this.noteService.update(id, updateNote);
    if (!note) {
      throw new NotFoundException('Not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Updated',
      note,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id, @Res() response) {
    await this.noteService.remove(id);
    return response.status(HttpStatus.NO_CONTENT).json({
      message: 'Deleted',
    });
  }
}
