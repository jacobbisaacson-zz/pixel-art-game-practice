const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

const keys = []

const player = {
  x: 200,
  y: 200,
  width: 32,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false
}

const playerSprite = new Image()
playerSprite.src = "sithjester1.png"
const background = new Image()
// background.src = "background.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true
  player.moving = true
  // console.log(keys);
})

window.addEventListener("keyup", function(e) {
  delete keys[e.keyCode]
  player.moving = false
})

function movePlayer() {
  //if up key is pressed, AND player's position on the window is less than height
  // then move the player up when key is pressed
  // AND change their position (sprite) to face up (3)
  // do the same for left, right, down
  if(keys[87] && player.y > 50){
    player.y -= player.speed
    player.frameY = 3
    player.moving = true
  }
  if(keys[65] && player.x > 0){
    player.x -= player.speed
    player.frameY = 1
    player.moving = true
  }
  if(keys[83] && player.y < canvas.height - player.height){
    player.y += player.speed
    player.frameY = 0
    player.moving = true
  }
  if(keys[68] && player.x < canvas.width - player.width){
    player.x += player.speed
    player.frameY = 2
    player.moving = true
  }
}

//to show legs moving animation
//AND if player is moving
function handlePlayerFrame() {
  if(player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0
}


// let position = 0

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
//   // position++
//   drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, 
//     player.height, player.x, player.y, player.width * 2, player.height * 2)
//   // can scale with player height or width * 2.
//   movePlayer()
//   handlePlayerFrame()
//   requestAnimationFrame(animate)
// }

// animate()

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000/fps
  then = Date.now()
  startTime = then
  animate()

}

function animate() {
  requestAnimationFrame(animate)
  now = Date.now()
  elapsed = now - then
  if(elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, 
    player.height, player.x, player.y, player.width * 2, player.height * 2)
    movePlayer()
    handlePlayerFrame()
  }

}

startAnimating(10)





