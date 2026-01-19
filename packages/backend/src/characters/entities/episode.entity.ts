import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Episode {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  episode: string;
}
