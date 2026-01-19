import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CharactersService } from './characters.service.js';
import { CreateCharacterInput } from './dto/create-character.input.js';
import { UpdateCharacterInput } from './dto/update-character.input.js';
import { Character } from './entities/character.entity.js';

@Resolver(() => Character)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Mutation(() => Character)
  createCharacter(
    @Args('createCharacterInput') createCharacterInput: CreateCharacterInput,
  ) {
    return this.charactersService.create(createCharacterInput);
  }

  @Query(() => [Character], { name: 'characters' })
  findAll() {
    return this.charactersService.findAll();
  }

  @Query(() => Character, { name: 'character', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.charactersService.findOne(id);
  }

  @Mutation(() => Character)
  updateCharacter(
    @Args('updateCharacterInput') updateCharacterInput: UpdateCharacterInput,
  ) {
    return this.charactersService.update(
      updateCharacterInput.id,
      updateCharacterInput,
    );
  }

  @Mutation(() => Character)
  removeCharacter(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.remove(id);
  }
}
