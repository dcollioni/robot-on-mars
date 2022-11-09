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

    describe('.turnRight', () => {
      it('should be defined', () => {
        expect(robot.turnRight).toBeDefined()
      })

      describe('given the robot direction is north', () => {
        beforeAll(() => {
          robot.direction = directions.north
        })

        describe('given it turns right', () => {
          beforeAll(() => {
            robot.turnRight()
          })

          it('should have its direction changed to east', () => {
            expect(robot.direction).toStrictEqual(directions.east)
          })

          describe('given it turns right', () => {
            beforeAll(() => {
              robot.turnRight()
            })
  
            it('should have its direction changed to south', () => {
              expect(robot.direction).toStrictEqual(directions.south)
            })

            describe('given it turns right', () => {
              beforeAll(() => {
                robot.turnRight()
              })
    
              it('should have its direction changed to west', () => {
                expect(robot.direction).toStrictEqual(directions.west)
              })

              describe('given it turns right', () => {
                beforeAll(() => {
                  robot.turnRight()
                })
      
                it('should have its direction changed to north', () => {
                  expect(robot.direction).toStrictEqual(directions.north)
                })
              })
            })
          })
        })
      })
    })

    describe('.turnLeft', () => {
      it('should be defined', () => {
        expect(robot.turnLeft).toBeDefined()
      })

      describe('given the robot direction is north', () => {
        beforeAll(() => {
          robot.direction = directions.north
        })

        describe('given it turns left', () => {
          beforeAll(() => {
            robot.turnLeft()
          })

          it('should have its direction changed to west', () => {
            expect(robot.direction).toStrictEqual(directions.west)
          })

          describe('given it turns left', () => {
            beforeAll(() => {
              robot.turnLeft()
            })
  
            it('should have its direction changed to south', () => {
              expect(robot.direction).toStrictEqual(directions.south)
            })

            describe('given it turns left', () => {
              beforeAll(() => {
                robot.turnLeft()
              })
    
              it('should have its direction changed to east', () => {
                expect(robot.direction).toStrictEqual(directions.east)
              })

              describe('given it turns left', () => {
                beforeAll(() => {
                  robot.turnLeft()
                })
      
                it('should have its direction changed to north', () => {
                  expect(robot.direction).toStrictEqual(directions.north)
                })
              })
            })
          })
        })
      })
    })
  })
})
