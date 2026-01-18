import { CreateCharacterInput } from './create-character.input.js';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCharacterInput extends PartialType(CreateCharacterInput) {
  @Field(() => Int)
  id: number;
}
