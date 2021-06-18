/*SumTwoNumbers: That receives two numbers and returns the sum of both*/

const SumTwoNumbers = (num1,num2) => num1 + num2

let result = SumTwoNumbers(2,3)
console.log(result)

/*SumArrayNumbers: That receives a list and return the sum of entire list*/

const SumArrayNumbers = (numbers) => 
    numbers.reduce((a,b) => a + b)

let numbers = [2,5,7,11,27,45,100]
console.log(SumArrayNumbers(numbers))

/*const SumArrayNumbers = (numbers) => {
    let sum = 0
    numbers.forEach(number =>  {
        sum += number
})
return sum
}

let numbers = [2,5,7,11,27,45,100]
console.log('El resultado es: ' + SumArrayNumbers(numbers)) */

/*CompareNumbers: That receives three numbers and return the max of them*/

const CompareNumbers = (num1,num2,num3) => {
    if(num1>num2){
        if(num1>num3){
            return num1
        }
    }else if (num2>num3){
        return num2
    }else{
        return num3
    }
}

console.log(CompareNumbers(603,558,86))

/*CompareArrayNumbers: That receives two lists of numbers and returns a list with the max of both*/

const CompareArrayNumbers = (list1,list2) =>{

    let max= []
    max= [Math.max (...list1) , Math.max (...list2)]
    return max 
    
}

let list1= [58,100,62]
let list2= [96,63,85]


console.log(CompareArrayNumbers(list1,list2))


