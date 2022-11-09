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
}

const directionsOrder = [directions.north, directions.east, directions.south, directions.west]

module.exports = Robot
