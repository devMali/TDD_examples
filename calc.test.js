//import sum from "./sum";
const sum = require('./calc')

test('sum of 2 and 4 should be 6 ', () => {
    expect(sum(2,4)).toBe(6)
  })

  
  test('sum of 1,2,3,4,5 should be 15 ', () => {
    expect(sum(1,2,3,4,5)).toBe(15)
    })
      
  test('sum of 10 and 5 should be 15 ', () => {
    expect(sum(10,5)).toBe(15)
    })
        
          
