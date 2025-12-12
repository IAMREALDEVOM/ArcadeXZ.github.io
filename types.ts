export enum GameId {
  MENU = 'MENU',
  PIXEL_RUNNER = 'PIXEL_RUNNER',
  BRAIN_SPEED = 'BRAIN_SPEED',
  STICKMAN_FIGHT = 'STICKMAN_FIGHT',
  CITY_BUILDER = 'CITY_BUILDER',
  BOMB_DEFUSE = 'BOMB_DEFUSE',
  MATCH_3 = 'MATCH_3',
  SNAKE = 'SNAKE',
  PORTAL_ESCAPE = 'PORTAL_ESCAPE',
  AIM_TRAINER = 'AIM_TRAINER',
  ZOMBIE_DEFENSE = 'ZOMBIE_DEFENSE',
}

export interface GameMetadata {
  id: GameId;
  title: string;
  description: string;
  icon: string;
  color: string;
}
