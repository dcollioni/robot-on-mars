const directions = require('./directions')

class Robot {
  constructor() {
    this.posX = 1
    this.posY = 1
    this.direction = directions.north
  }
}

module.exports = Robot
