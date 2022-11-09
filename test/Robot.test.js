const Robot = require('./../src/Robot')
const Plateau = require('./../src/Plateau')
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

    describe('.moveForward', () => {
      it('should be defined', () => {
        expect(robot.moveForward).toBeDefined()
      })

      describe('given a plateau of 3x3', () => {
        const plateau = new Plateau(3, 3)

        describe('given the robot direction is north and position is 1,1', () => {
          beforeAll(() => {
            robot.direction = directions.north
            robot.posX = 1
            robot.posY = 1
          })

          describe('given the robot moves forward', () => {
            beforeAll(() => {
              robot.moveForward(plateau)
            })

            it('robot posY should change to 2', () => {
              expect(robot.posX).toStrictEqual(1)
              expect(robot.posY).toStrictEqual(2)
            })

            describe('given the robot moves forward', () => {
              beforeAll(() => {
                robot.moveForward(plateau)
              })

              it('robot posY should change to 3', () => {
                expect(robot.posX).toStrictEqual(1)
                expect(robot.posY).toStrictEqual(3)
              })

              describe('given the robot moves forward', () => {
                beforeAll(() => {
                  robot.moveForward(plateau)
                })
  
                it('robot posY should remain 3', () => {
                  expect(robot.posX).toStrictEqual(1)
                  expect(robot.posY).toStrictEqual(3)
                })
              })
            })
          })
        })

        describe('given the robot direction is east and position is 1,1', () => {
          beforeAll(() => {
            robot.direction = directions.east
            robot.posX = 1
            robot.posY = 1
          })

          describe('given the robot moves forward', () => {
            beforeAll(() => {
              robot.moveForward(plateau)
            })

            it('robot posX should change to 2', () => {
              expect(robot.posY).toStrictEqual(1)
              expect(robot.posX).toStrictEqual(2)
            })

            describe('given the robot moves forward', () => {
              beforeAll(() => {
                robot.moveForward(plateau)
              })

              it('robot posX should change to 3', () => {
                expect(robot.posY).toStrictEqual(1)
                expect(robot.posX).toStrictEqual(3)
              })

              describe('given the robot moves forward', () => {
                beforeAll(() => {
                  robot.moveForward(plateau)
                })
  
                it('robot posX should remain 3', () => {
                  expect(robot.posY).toStrictEqual(1)
                  expect(robot.posX).toStrictEqual(3)
                })
              })
            })
          })
        })

        describe('given the robot direction is south and position is 1,3', () => {
          beforeAll(() => {
            robot.direction = directions.south
            robot.posX = 1
            robot.posY = 3
          })

          describe('given the robot moves forward', () => {
            beforeAll(() => {
              robot.moveForward(plateau)
            })

            it('robot posY should change to 2', () => {
              expect(robot.posX).toStrictEqual(1)
              expect(robot.posY).toStrictEqual(2)
            })

            describe('given the robot moves forward', () => {
              beforeAll(() => {
                robot.moveForward(plateau)
              })

              it('robot posY should change to 1', () => {
                expect(robot.posX).toStrictEqual(1)
                expect(robot.posY).toStrictEqual(1)
              })

              describe('given the robot moves forward', () => {
                beforeAll(() => {
                  robot.moveForward(plateau)
                })
  
                it('robot posY should remain 1', () => {
                  expect(robot.posX).toStrictEqual(1)
                  expect(robot.posY).toStrictEqual(1)
                })
              })
            })
          })
        })

        describe('given the robot direction is west and position is 3,1', () => {
          beforeAll(() => {
            robot.direction = directions.west
            robot.posX = 3
            robot.posY = 1
          })

          describe('given the robot moves forward', () => {
            beforeAll(() => {
              robot.moveForward(plateau)
            })

            it('robot posX should change to 2', () => {
              expect(robot.posY).toStrictEqual(1)
              expect(robot.posX).toStrictEqual(2)
            })

            describe('given the robot moves forward', () => {
              beforeAll(() => {
                robot.moveForward(plateau)
              })

              it('robot posX should change to 1', () => {
                expect(robot.posY).toStrictEqual(1)
                expect(robot.posX).toStrictEqual(1)
              })

              describe('given the robot moves forward', () => {
                beforeAll(() => {
                  robot.moveForward(plateau)
                })
  
                it('robot posX should remain 1', () => {
                  expect(robot.posY).toStrictEqual(1)
                  expect(robot.posX).toStrictEqual(1)
                })
              })
            })
          })
        })
      })
    })
  })
})
