const directions = require('./../src/directions')

describe('directions', () => {
  it('should be defined', () => {
    expect(directions).toBeDefined()
  })

  describe('.north', () => {
    it('should be defined correctly', () => {
      expect(directions.north).toStrictEqual('North')
    })
  })

  describe('.east', () => {
    it('should be defined correctly', () => {
      expect(directions.east).toStrictEqual('East')
    })
  })

  describe('.south', () => {
    it('should be defined correctly', () => {
      expect(directions.south).toStrictEqual('South')
    })
  })

  describe('.west', () => {
    it('should be defined correctly', () => {
      expect(directions.west).toStrictEqual('West')
    })
  })
})
