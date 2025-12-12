import React, { useState } from 'react';
import { GameId, GameMetadata } from './types';
import { 
  Gamepad2, Activity, Swords, Building2, Bomb, 
  Grid3X3, Worm, DoorOpen, Crosshair, Skull 
} from 'lucide-react';

// Games
import PixelRunner from './games/PixelRunner';
import BrainSpeed from './games/BrainSpeed';
import StickmanFight from './games/StickmanFight';
import CityBuilder from './games/CityBuilder';
import BombDefuse from './games/BombDefuse';
import Match3 from './games/Match3';
import Snake from './games/Snake';
import PortalEscape from './games/PortalEscape';
import AimTrainer from './games/AimTrainer';
import ZombieDefense from './games/ZombieDefense';

const GAMES: GameMetadata[] = [
  { id: GameId.PIXEL_RUNNER, title: 'Pixel Runner', description: 'Jump & slide to survive.', icon: 'Gamepad2', color: 'from-blue-500 to-cyan-400' },
  { id: GameId.BRAIN_SPEED, title: 'Brain Speed', description: 'Test your reflexes.', icon: 'Activity', color: 'from-pink-500 to-rose-400' },
  { id: GameId.STICKMAN_FIGHT, title: 'Stickman Arena', description: 'One-button combat.', icon: 'Swords', color: 'from-red-500 to-orange-400' },
  { id: GameId.CITY_BUILDER, title: 'Mini City', description: 'Build your tiny world.', icon: 'Building2', color: 'from-green-500 to-emerald-400' },
  { id: GameId.BOMB_DEFUSE, title: 'Bomb Defuse', description: 'Solve puzzles fast.', icon: 'Bomb', color: 'from-yellow-500 to-amber-400' },
  { id: GameId.MATCH_3, title: 'Match-3', description: 'Swap and pop tiles.', icon: 'Grid3X3', color: 'from-purple-500 to-violet-400' },
  { id: GameId.SNAKE, title: 'Snake', description: 'Classic snake evolved.', icon: 'Worm', color: 'from-lime-500 to-green-400' },
  { id: GameId.PORTAL_ESCAPE, title: 'Portal Escape', description: 'Navigate the maze.', icon: 'DoorOpen', color: 'from-indigo-500 to-blue-400' },
  { id: GameId.AIM_TRAINER, title: 'Aim Trainer', description: 'Click targets fast.', icon: 'Crosshair', color: 'from-teal-500 to-cyan-400' },
  { id: GameId.ZOMBIE_DEFENSE, title: 'Zombie Defense', description: 'Survive the horde.', icon: 'Skull', color: 'from-slate-600 to-slate-400' },
];

const IconMap: Record<string, React.FC<any>> = {
  Gamepad2, Activity, Swords, Building2, Bomb, Grid3X3, Worm, DoorOpen, Crosshair, Skull
};

export default function App() {
  const [activeGame, setActiveGame] = useState<GameId>(GameId.MENU);

  const renderGame = () => {
    switch (activeGame) {
      case GameId.PIXEL_RUNNER: return <PixelRunner onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.BRAIN_SPEED: return <BrainSpeed onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.STICKMAN_FIGHT: return <StickmanFight onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.CITY_BUILDER: return <CityBuilder onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.BOMB_DEFUSE: return <BombDefuse onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.MATCH_3: return <Match3 onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.SNAKE: return <Snake onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.PORTAL_ESCAPE: return <PortalEscape onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.AIM_TRAINER: return <AimTrainer onBack={() => setActiveGame(GameId.MENU)} />;
      case GameId.ZOMBIE_DEFENSE: return <ZombieDefense onBack={() => setActiveGame(GameId.MENU)} />;
      default: return null;
    }
  };

  if (activeGame !== GameId.MENU) {
    return (
      <div className="h-full w-full bg-slate-900 animate-fade-in">
        {renderGame()}
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-slate-950 overflow-y-auto p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 font-pixel tracking-widest">
          ARCADE<span className="text-white">X</span>
        </h1>
        <p className="text-slate-400">Select a game to start playing</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {GAMES.map((game) => {
          const Icon = IconMap[game.icon];
          return (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`p-4 rounded-full bg-slate-800 text-white mb-4 group-hover:bg-gradient-to-br ${game.color} group-hover:shadow-lg transition-all duration-300`}>
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
              <p className="text-xs text-slate-400">{game.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}