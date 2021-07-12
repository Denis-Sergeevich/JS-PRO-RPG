import './index.scss';
import Hero from '../dist/assets/Female-2-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const hero = document.createElement('img');
hero.src = Hero;

const shots = 3;
let cycle = 0;

const spriteW = 48;
const spriteH = 48;
// let bottomPressed = false;
let pY = 276;
let pX = 276;
let face = 0;

function background() {
  ctx.fillStyle = '#008000';
  ctx.fillRect(0, 0, 600, 600);

  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.moveTo(0, 0);
  ctx.lineTo(120, 0);
  ctx.lineTo(100, 100);
  ctx.arc(70, 100, 30, 0, Math.PI / 2);
  ctx.lineTo(0, 140);
  ctx.lineTo(0, 0);
  ctx.fill();

  ctx.fillStyle = 'brown';
  ctx.fillRect(400, 0, 50, 600);

  ctx.fillStyle = 'brown';
  ctx.fillRect(450, 200, 150, 50);

  ctx.beginPath();
  ctx.fillStyle = 'yellow';
  ctx.arc(100, 400, 50, Math.PI / 2, (3 * Math.PI) / 2);
  ctx.lineTo(100, 350);
  ctx.arc(200, 400, 50, -Math.PI / 2, 0);
  ctx.lineTo(270, 500);
  ctx.arc(220, 500, 50, 0, Math.PI);
  ctx.lineTo(100, 450);
  ctx.fill();
}

function move() {
  cycle = (cycle + 1) % shots;
  return cycle;
}

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    // bottomPressed = true;
    face = 0;
    pY += 10;
    move();
    if (pY >= 552) {
      pY = 552;
    }
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    // bottomPressed = true;
    face = 144;
    pY -= 10;
    move();
    if (pY <= 0) {
      pY = 0;
    }
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    // bottomPressed = true;
    face = 48;
    pX -= 10;
    move();
    if (pX <= 0) {
      pX = 0;
    }
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    // bottomPressed = true;
    face = 96;
    pX += 10;
    move();
    if (pX >= 552) {
      pX = 552;
    }
  }
}

/* function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    bottomPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    bottomPressed = false;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    bottomPressed = false;
  }
} */

document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

hero.addEventListener('load', () => {
  setInterval(() => {
    background();
    ctx.drawImage(hero, cycle * spriteW, face, spriteW, spriteH, pX, pY, 48, 48);
  }, 60);
});
