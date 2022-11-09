const prompts = require('prompts')
const Robot = require('./../src/Robot')

describe('index', () => {
  
  describe('given the plateau grid is defined with 3x4 and the input command with FFRFLFRF', () => {
    const grid = '3x4'
    const input = 'FFRFLFRF'
    let spyRobotTurnRight, spyRobotTurnLeft, spyRobotMoveForward

    beforeAll(() => {
      prompts.inject([ grid, input ])

      spyRobotTurnRight = jest.spyOn(Robot.prototype, 'turnRight')
      spyRobotTurnLeft = jest.spyOn(Robot.prototype, 'turnLeft')
      spyRobotMoveForward = jest.spyOn(Robot.prototype, 'moveForward')
      
      const index = require('./../src/index')
    })

    it('should operate the robot following the command input', () => {
      expect(spyRobotTurnRight).toHaveBeenCalledTimes(2)
      expect(spyRobotTurnLeft).toHaveBeenCalledTimes(1)
      expect(spyRobotMoveForward).toHaveBeenCalledTimes(5)
    })
  })
})
