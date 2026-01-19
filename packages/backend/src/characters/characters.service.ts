/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service.js';
import { CreateCharacterInput } from './dto/create-character.input.js';
import { UpdateCharacterInput } from './dto/update-character.input.js';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  create(createCharacterInput: CreateCharacterInput) {
    return 'This action adds a new character';
  }

  findAll() {
    return this.prisma.character.findMany({
      include: {
        origin: true,
        episodes: true,
      },
      take: 10,
    });
  }

  findOne(id: string) {
    return this.prisma.character.findUnique({
      where: { id },
      include: {
        origin: true,
        episodes: true,
      },
    });
  }

  update(id: number, updateCharacterInput: UpdateCharacterInput) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
