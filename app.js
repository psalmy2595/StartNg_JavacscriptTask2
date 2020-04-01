/*
array of objects called data with the values
Each individual object should have 'principal' and 'time' as keys
*/
data = [{
        "principal": 2500,
        "time": 1.8
    },
    {
        "principal": 1000,
        "time": 5
    },
    {
        "principal": 3000,
        "time": 1
    },
    {
        "principal": 2000,
        "time": 3
    }

]
//interestCalculator 
const interestCalculator = (arr) => {
    let interestData = []
    arr.map((item) => {
        if (item.principal >= 2500 && item.time > 1 && item.time < 3) {
            item.rate = 3
        } else if (item.principal >= 2500 && item.time >= 3) {
            item.rate = 4
        } else if (item.principal < 2500 || item.time <= 1) {
            item.rate = 2
        } else {
            item.rate = 1
        }

        item.interest = (item.principal * item.rate * item.time) / 100
        interestData.push(item)
    })
    console.log(interestData)
    return interestData
}

interestCalculator(data);