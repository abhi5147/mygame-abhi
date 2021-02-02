import { getInputDirection} from './input-desk.js'

export let SNAKE_SPEED = 0;

document.getElementById('level1').addEventListener('click',level1);
function level1(){
    SNAKE_SPEED = 1;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level2').addEventListener('click',level2);
function level2(){
    SNAKE_SPEED = 2;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level3').addEventListener('click',level3);
function level3(){
    SNAKE_SPEED = 3;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level4').addEventListener('click',level4);
function level4(){
    SNAKE_SPEED = 4;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level5').addEventListener('click',level5);
function level5(){
    SNAKE_SPEED = 5;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level6').addEventListener('click',level6);
function level6(){
    SNAKE_SPEED = 6;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level7').addEventListener('click',level7);
function level7(){
    SNAKE_SPEED = 7;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level8').addEventListener('click',level8);
function level8(){
    SNAKE_SPEED = 8;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level9').addEventListener('click',level9);
function level9(){
    SNAKE_SPEED = 9;
    document.getElementById('levelSection').style.display = 'none';
}
document.getElementById('level10').addEventListener('click',level10);
function level10(){
    SNAKE_SPEED = 10;
    document.getElementById('levelSection').style.display = 'none';
}


const snakeBody = [{ x: 10, y: 11 }]
let newSegments = 0;

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i =  snakeBody.length - 2; i>=0 ; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }

    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount;
}

export function onSnake(position,  {ignoreHead = false} = {}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index===0) return false;
        return equalPositions(segment,position)
    })
}


export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})

}

function equalPositions(pos1,pos2){
    return pos1.x==pos2.x && pos1.y==pos2.y;
}

function addSegments(){
    for(let i=0; i< newSegments ; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments=0;
}