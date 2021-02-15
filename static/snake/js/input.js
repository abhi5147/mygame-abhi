let inputDirection = {x: 0, y:0 }
let lastInputDirection = {x: 0, y:0 }

document.getElementById("box2").addEventListener("click", fun1)
function fun1() {
    if(lastInputDirection.y==0)
            inputDirection = {x:0,y:-1}
  }
document.getElementById("box8").addEventListener("click", fun2)
function fun2() {
    if(lastInputDirection.y==0)
            inputDirection = {x:0,y:1}
  }
document.getElementById("box4").addEventListener("click", fun3)
function fun3() {
    if(lastInputDirection.x==0)
            inputDirection = {x:-1,y:0}
  }
document.getElementById("box6").addEventListener("click", fun4)
function fun4() {
    if(lastInputDirection.x==0)
            inputDirection = {x:1,y:0}
  }

  window.addEventListener('keydown',e =>{
    switch (e.key){
        case 'ArrowUp':
            if(lastInputDirection.y!=0) break
            inputDirection = {x:0,y:-1}
            break;
        case 'ArrowDown':
            if(lastInputDirection.y!=0) break
            inputDirection = {x:0,y:1}
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x!=0) break
            inputDirection = {x:-1,y:0}
            break;
        case 'ArrowRight':
            if(lastInputDirection.x!=0) break
            inputDirection = {x:1,y:0}
            break;
    }
})

export  function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}