const prompts = require('prompts')
const Plateau = require('./Plateau')
const Robot = require('./Robot')

const readInputs = () => {
  const questions = [
    {
      type: 'text',
      name: 'grid',
      message: 'Please define the plateau dimension (e.g. 3x4)'
    },
    {
      type: 'text',
      name: 'input',
      message: 'Please enter your input command (e.g. FFRFLFRF)'
    }
  ]

  return prompts(questions)
}

const executeCommands = (input, robot, plateau) => {
  for (const command of input) {
    switch (command) {
      case 'F': {
        robot.moveForward(plateau)
        break
      }
      case 'R': {
        robot.turnRight()
        break
      }
      case 'L': {
        robot.turnLeft()
        break
      }
    }
  }
}

const start = async () => {
  const { grid, input } = await readInputs()
  
  const [maxX, maxY] = grid.split('x')
  const plateau = new Plateau(maxX, maxY)

  const robot = new Robot()
  
  executeCommands(input, robot, plateau)

  const { posX, posY, direction } = robot
  console.log(`${posX},${posY},${direction}`)
}

start()
