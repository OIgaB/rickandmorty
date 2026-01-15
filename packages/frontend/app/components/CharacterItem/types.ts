type GenderType = "Female" | "Male" | "unknown";
type StatusType = "Alive" | "Dead" | "unknown";
type SpeciesType = "Human" | "Alien";

type OriginType = {
  name: string;
  url: string;
};

type LocationType = {
  name: string;
  url: string;
};

export interface CharacterItemPropsType {
  id?: number;
  image: string;
  name: string;
  gender: GenderType;
  status: StatusType;
  species: SpeciesType;
  origin: OriginType;
  episode: string[];
  type: string;
  location: LocationType;
  url: string;
}
