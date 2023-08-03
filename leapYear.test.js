const leapYear = require('./leapYear')

describe("Leap Year ->",() => {
    
    test("All year divisible by 400 are leap years",() => {
        expect(leapYear(2000)).toBe(true)
    })

    test("All year divisible by 100 but not by 400 are not leap years",() => {
        expect(leapYear(2100)).toBe(false)
    })
    
    test("All years divisible by 4 but not by 100 ARE leap years",() => {
        expect(leapYear(2008)).toBe(true)
    })

    test("All years not divisible by 4 are NOT leap years",() => {
        expect(leapYear(2017)).toBe(false)
    })


})