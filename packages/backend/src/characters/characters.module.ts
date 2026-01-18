import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service.js';
import { CharactersResolver } from './characters.resolver.js';

@Module({
  providers: [CharactersResolver, CharactersService],
})
export class CharactersModule {}
