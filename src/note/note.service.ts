import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note: Note = new Note();
    note.title = createNoteDto.title;
    note.content = createNoteDto.content;
    note.category = createNoteDto.category;
    return this.noteRepository.save(note);
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async findOne(id: string): Promise<Note> {
    return this.noteRepository.findOneBy({ id });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note: Note = new Note();
    note.id = id;
    note.title = updateNoteDto.title;
    note.content = updateNoteDto.content;
    note.category = updateNoteDto.category;
    note.published = updateNoteDto.published;
    return this.noteRepository.save(note);
  }

  async remove(id: string): Promise<any> {
    return this.noteRepository.delete(id);
  }
}
