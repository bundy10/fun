

function multiplesOfThreeFinder(num)  {
    return num % 3 === 0 || num % 5 === 0 ? num : 0
}
function multiplesOfThreeAndFive(num) {
    if (num <= 1){
        return 0
    }

    const copy = num - 1
    const arrayOfCopy = Array.from({length: copy}, (_, index) => multiplesOfThreeFinder(index + 1))
    console.log(arrayOfCopy)
    return arrayOfCopy.reduce((acc, curr) => acc + curr)
}



module.exports = multiplesOfThreeAndFive;
