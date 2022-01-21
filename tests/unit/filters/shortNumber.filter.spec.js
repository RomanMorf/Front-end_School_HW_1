import shortNumber from "@/filters/shortNumber.filter.js";

describe('check shortNumber func from filters', () => {

  test('should return 555', () => {
    const number = 555
    expect(shortNumber(number)).toBe(555)
  })

  test('should return 10 K', () => {
    const number = 1e4
    expect(shortNumber(number)).toBe('10.0 K')
  })

  test('should return 10 M', () => {
    const number = 1e7
    expect(shortNumber(number)).toBe('10.0 M')
  })

  test('should return 99.6 M', () => {
    const number = 99565459
    expect(shortNumber(number)).toBe('99.6 M')
  })

});
