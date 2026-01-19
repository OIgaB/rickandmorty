import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Origin {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
