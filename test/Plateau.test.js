const Plateau = require('./../src/Plateau')

describe('Plateau', () => {
  it('should be defined', () => {
    expect(Plateau).toBeDefined()
  })

  describe('given a plateau is created', () => {
    const maxX = 5
    const maxY = 6
    const plateau = new Plateau(maxX, maxY)

    it('should be defined', () => {
      expect(plateau).toBeDefined()
    })

    it('should contain the maxX property with the initial value', () => {
      expect(plateau.maxX).toStrictEqual(maxX)
    })

    it('should contain the maxY property with the initial value', () => {
      expect(plateau.maxY).toStrictEqual(maxY)
    })
  })
})
