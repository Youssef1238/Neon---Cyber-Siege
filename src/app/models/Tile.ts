import { Coordinate } from "./Coordinate";
import { Unit } from "./Unit";

export interface Tile {
  id: string; // e.g., 'tile-3-4'
  position: Coordinate;
  type: 'floor' | 'wall' | 'hazard';
  isWalkable: boolean;
  occupant: Unit | null;
}