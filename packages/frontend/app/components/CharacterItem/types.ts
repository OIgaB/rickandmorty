export type GenderType = "Female" | "Male" | "Genderless" | "unknown";
type StatusType = "Alive" | "Dead" | "unknown";
type SpeciesType = "Human" | "Alien";

type OriginType = {
  name: string;
};

export type EpisodeType = {
  id: string;
  name: string;
  episode: string;
};

export interface CharacterItemPropsType {
  id?: number;
  image: string;
  name: string;
  gender: GenderType;
  status: StatusType;
  species: SpeciesType;
  origin: OriginType;
  type: string;
  episode: EpisodeType[];
}
