export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt?: string | null;
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt?: string | null;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  affiliation: string;
  deletedAt?: string | null;
  originPlanet?: Planet;
  transformations?: Transformation[];
}
