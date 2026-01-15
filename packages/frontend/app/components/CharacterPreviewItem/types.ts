import { CharacterItemPropsType } from "../types";

export type CharacterPreviewItemPropsType = Pick<
  CharacterItemPropsType,
  "id" | "image" | "name" | "gender"
>;