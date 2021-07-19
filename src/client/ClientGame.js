import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('left');
        }
      },
      ArrowRight: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('right');
        }
      },
      ArrowDown: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('down');
        }
      },
      ArrowUp: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('up');
        }
      },
    });
  }

  movePlayerToDir(dir) {
    const dirs = {
      left: [-1, 0],
      right: [1, 0],
      down: [0, 1],
      up: [0, -1],
    };

    const { player } = this;

    if (player) {
      player.moveByCellCoord(dirs[dir][0], dirs[dir][1], (cell) => cell.findObjectsByType('grass').length);
    }
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
