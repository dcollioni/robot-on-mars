const Robot = require('./../src/Robot')
const directions = require('./../src/directions')

describe('Robot', () => {
  it('should be defined', () => {
    expect(Robot).toBeDefined()
  })

  describe('given a robot is created', () => {
    const robot = new Robot()

    it('should be defined', () => {
      expect(robot).toBeDefined()
    })

    it('should contain the posX property with the default value', () => {
      const expected = 1
      expect(robot.posX).toStrictEqual(expected)
    })

    it('should contain the posY property with the default value', () => {
      const expected = 1
      expect(robot.posY).toStrictEqual(expected)
    })

    it('should contain the direction property with the default value', () => {
      const expected = directions.north
      expect(robot.direction).toStrictEqual(expected)
    })
  })
})
