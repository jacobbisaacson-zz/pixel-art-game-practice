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
background.src = "background.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}



// let position = 0
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  // position++
  drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, 
    player.height, player.x, player.y, player.width * 2, player.height * 2)
  // can scale with player height or width * 2.
  movePlayer()
  requestAnimationFrame(animate)
}

animate()

window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true
  // console.log(keys);
})

window.addEventListener("keyup", function(e) {
  delete keys[e.keyCode]
})

function movePlayer() {
  //if up key is pressed, and player's position on the window is less than height
  // then move the player up when key is pressed
  // AND change their position (sprite) to face up (3)
  // do the same for left, right, down
  if(keys[38] && player.y > 100){
    player.y -= player.speed
    player.frameY = 3
  }
  if(keys[37] && player.x > 0){
    player.x -= player.speed
    player.frameY = 1
  }
  if(keys[37] && player.x > 0){
    player.x -= player.speed
    player.frameY = 1
  }
  if(keys[37] && player.x > 0){
    player.x -= player.speed
    player.frameY = 1
  }
}






