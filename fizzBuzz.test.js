const fizzBuzz = require('./fizzBuzz')

describe("FizzBuzz printing in corrcet way", () => {

    test("all numbers should print from 1 to 100", () => {
        let N=2;
        let expected = [1,2];
        let actual = fizzBuzz(2);
        expect(actual).toStrictEqual(expected)
    })

    test("If number is multiple of 3 then Fizz",()=>{
        
        let N = 3;
        let expected = [1,2,"Fizz"]
        let actual = fizzBuzz(N);

        expect(actual).toStrictEqual(expected);
    })

    test("If number is multiple of 5 then Buzz",()=>{
        
        let N = 11;
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11]
        let actual = fizzBuzz(N);

        expect(actual).toStrictEqual(expected);
    })

    test("If number is multiple of 3 & 5 then FizzBuzz",()=>{
        
        let N = 16;
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16]
        let actual = fizzBuzz(N);

        expect(actual).toStrictEqual(expected);
    })

})