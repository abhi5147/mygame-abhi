import {onSnake, expandSnake, SNAKE_SPEED} from './snake-desk.js'
import {randomGridPosition} from './grid-desk.js'
let food = getRandomFoodPosition()
const Expansion_Rate = 1;
let prev=0;
let curr=0;


export function update(){
    if(onSnake(food)){
        curr++;
        expandSnake(Expansion_Rate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement("div")
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
export function getScore(){
        if(prev!=curr){
            prev=curr;
            return true;
        }
 }