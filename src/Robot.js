const directions = require('./directions')

class Robot {
  constructor() {
    this.posX = 1
    this.posY = 1
    this.direction = directions.north
  }

  turnRight() {
    const currentIndex = directionsOrder.indexOf(this.direction)
    const nextDirection = directionsOrder[currentIndex + 1] || directionsOrder[0]
    this.direction = nextDirection
  }

  turnLeft() {
    const currentIndex = directionsOrder.indexOf(this.direction)
    const nextDirection = directionsOrder[currentIndex - 1] || directionsOrder[directionsOrder.length - 1]
    this.direction = nextDirection
  }

  moveForward(plateau) {
    const { maxX, maxY } = plateau
    
    switch (this.direction) {
      case directions.north: {
        this.posY += (this.posY < maxY) ? 1 : 0
        break
      }
      case directions.east: {
        this.posX += (this.posX < maxX) ? 1 : 0
        break
      }
      case directions.south: {
        this.posY -= (this.posY > 1) ? 1 : 0
        break
      }
      case directions.west: {
        this.posX -= (this.posX > 1) ? 1 : 0
        break
      }
    }
  }
}

const directionsOrder = [directions.north, directions.east, directions.south, directions.west]

module.exports = Robot
