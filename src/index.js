import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

/* import Hero from './assets/Female-2-Walk.png';
import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const hero = document.createElement('img');
hero.src = Hero;

const shots = 3;
let cycle = 0;

const spriteW = 48;
const spriteH = 48;
//let bottomPressed = false;
const canvasH = 600;
const canvasW = 600;
let pY = (canvasH - spriteH)/2;
let pX = (canvasW - spriteW)/2;
let face = 0;

//const terrain = document.createElement('img');
//terrain.src = terrainAtlas;

function move() {
  cycle = (cycle + 1) % shots;
  return cycle;
}

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    //bottomPressed = true;
    face = 0;
    pY += 10;
    move();
    if (pY >= canvasH - spriteH) {
      pY = canvasH - spriteH;
    }
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    //bottomPressed = true;
    face = spriteH * 3;
    pY -= 10;
    move();
    if (pY <= 0) {
      pY = 0;
    }
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    //bottomPressed = true;
    face = spriteH * 1;
    pX -= 10;
    move();
    if (pX <= 0) {
      pX = 0;
    }
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    //bottomPressed = true;
    face = spriteH * 2;
    pX += 10;
    move();
    if (pX >= canvasW - spriteW) {
      pX = canvasW - spriteW;
    }
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    bottomPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    bottomPressed = false;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    bottomPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

terrain.addEventListener('load', () => {

  const {map} = worldCfg;
  map.forEach((cfgRow, y) => {
    cfgRow.forEach((cfgCell, x) => {
      const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
      ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH)
    })
  })

});

function walk(timestamp) {
  //ctx.clearRect(0, 0, 600, 600);
  ctx.drawImage(hero, cycle * spriteW, face, spriteW, spriteH, pX, pY, 48, 48);
  window.requestAnimationFrame(walk);

}

hero.addEventListener('load', () => {
  window.requestAnimationFrame(walk);

}); */
