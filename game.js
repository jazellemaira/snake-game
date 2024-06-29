import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"
import { handleKeydown } from "./input.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.querySelector("#game-board")

// Main game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost! Press ok to restart.")) {
      window.location = "/"
    }
    window.removeEventListener("keydown", handleKeydown)
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

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

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  if (gameOver) {
    playGameOver()
  }
}

function playGameOver() {
  const gameOverSound = new Audio("game-over.mp3")
  gameOverSound.play()
}
