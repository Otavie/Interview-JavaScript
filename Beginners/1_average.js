// Calculate the Average of an Array

function arrayAverage(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(`The average of [${array}] is ${sum/array.length}`)
}

arrayAverage([1, 2, 3, 60])

// Another way of writing this above code is:

function calculateAverage(array){
    sum = 0;
    array.forEach(element => {
        sum += element
    })
    console.log(`The average of [${array}] is ${sum/array.length}`)
}

calculateAverage([20, 10, 90])

// Method 3

function average(array){
    sum = 0;
    for (const number of array){
        sum += number
    }
    return `The average of [${array}] is ${sum/array.length}`
}

console.log(average([9, 1.7, 1.3]))