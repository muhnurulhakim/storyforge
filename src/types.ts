export interface Story {
  id: string;
  title: string;
  synopsis: string;
  characters: Character[];
  scenes: Scene[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface Scene {
  id: string;
  title: string;
  content: string;
  characters: string[];
}