import { Sum } from "../sum"
test("sum function should caculate the sum of two numbers", ()=>{
    
    const result = Sum(3,4);

    //Assertion
    expect(result).toBe(7)
})