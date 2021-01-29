let inputDirection = {x: 0, y:0 }
let lastInputDirection = {x: 0, y:0 }

document.getElementById("box1").addEventListener("click", fun1)
function fun1() {
    if(lastInputDirection.y==0)
            inputDirection = {x:0,y:-1}
  }
document.getElementById("box2").addEventListener("click", fun2)
function fun2() {
    if(lastInputDirection.y==0)
            inputDirection = {x:0,y:1}
  }
document.getElementById("box3").addEventListener("click", fun3)
function fun3() {
    if(lastInputDirection.x==0)
            inputDirection = {x:-1,y:0}
  }
document.getElementById("box4").addEventListener("click", fun4)
function fun4() {
    if(lastInputDirection.x==0)
            inputDirection = {x:1,y:0}
  }

export  function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}