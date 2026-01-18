import { Injectable } from '@nestjs/common';
import { CreateCharacterInput } from './dto/create-character.input.js';
import { UpdateCharacterInput } from './dto/update-character.input.js';

@Injectable()
export class CharactersService {
  create(createCharacterInput: CreateCharacterInput) {
    return 'This action adds a new character';
  }

  findAll() {
    return `This action returns all characters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterInput: UpdateCharacterInput) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
