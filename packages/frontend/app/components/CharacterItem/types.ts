export type GenderType = "Female" | "Male" | "Genderless" | "unknown";
type StatusType = "Alive" | "Dead" | "unknown";
type SpeciesType = "Human" | "Alien";

type LocationType = {
  name: string;
  type: string;
  dimension: string;
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
  origin: LocationType;
  location: LocationType;
  type: string;
  episode: EpisodeType[];
}
