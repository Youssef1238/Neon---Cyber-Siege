export interface Unit {
  id: string;
  type: 'avatar' | 'enemy' | 'script';
  health: number;
  maxHealth: number;
  movementRange: number;
  attackRange: number;
}