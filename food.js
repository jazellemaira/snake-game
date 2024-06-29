import { randomGridPosition } from "./grid.js"
import { onSnake, expandSnake } from "./snake.js"

const EXPANSION_RATE = 1
const scoreCounter = document.querySelector(".score-counter")
let food = getRandomFoodPosition()
let foodEaten = 0

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    addScore(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div")
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add("food")
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

function addScore(amount) {
  scoreCounter.innerHTML = foodEaten += amount
}
