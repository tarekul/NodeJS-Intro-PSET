const add = (...rest) => rest.reduce((sum,num) => sum + num, 0) 
const subtract = (...rest) => rest.reduce((sum,num) => sum - num)
const multiply = (...rest) => rest.reduce((sum, num) => sum * num,1)
const divide = (...rest) => rest.reduce((sum, a) => sum/a, 1)    



module.exports = {
    add: add,
    subtract,
    multiply,
    divide
} 