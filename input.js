let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener("keydown", handleKeydown)

export function handleKeydown(input) {
  switch (input.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      playSound()
      break
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      playSound()
      break
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      playSound()
      break
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      playSound()
      break
  }
}

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}

function playSound() {
  const buttonClick = new Audio("button-click.mp3")
  buttonClick.play()
}
