const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

const keys = []

const player = {
  x: 0,
  y: 0,
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
  drawSprite(playerSprite, 0, 0, player.width, player.height, 200, 200, player.width * 2, player.height * 2)
  // can scale with player height or width * 2.
  requestAnimationFrame(animate)
}

animate()

window.addEventListener("keydown"), function(e) {

})

window.addEventListener("keyup"), function(e) {
  
})







