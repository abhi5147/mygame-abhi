import {update as updateSnake, draw as drawSnake,SNAKE_SPEED,getSnakeHead,snakeIntersection, onSnake } from './snake-phone.js'
import {update as updateFood, draw as drawFood , getScore} from './food-phone.js'
import {outsideGrid} from './grid-phone.js'

let lastRenderTime = 0;
let totalScore=0;
let gameOver=false;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(getScore())
        totalScore+=SNAKE_SPEED;
    document.getElementById('b2').innerHTML = totalScore;
    if(gameOver){
        document.getElementById('text').innerText = `Score : ${totalScore}`;
        document.getElementById('winning').style.display = 'flex';
        document.getElementById('score').style.display = 'none';
        document.getElementById('container').style.display = 'none';
        document.getElementById('item').style.display = 'none';
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1/SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}