import { registerEnumType } from '@nestjs/graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Gender, Species, Status } from '../../generated/prisma/enums.js';
import { Episode } from './episode.entity.js';
import { Origin } from './origin.entity.js';

registerEnumType(Status, { name: 'Status' });
registerEnumType(Gender, { name: 'Gender' });
registerEnumType(Species, { name: 'Species' });

@ObjectType()
export class Character {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Gender)
  gender: Gender;

  @Field()
  image: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Species)
  species: Species;

  @Field()
  type: string;

  @Field(() => Origin)
  origin: Origin;

  @Field(() => [Episode])
  episodes: Episode[];
}
