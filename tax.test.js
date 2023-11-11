const testtax= require("./tax")

test("test tax",()=>{
expect(testtax(50,50)).toBe(15)
})