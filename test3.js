// a - liczby wierszy, b - liczba kolumn.
function generateAnArray(a, b) {
    if (a > b) throw new Error('Liczba wierszy nie moze byc wieksza niz liczba kolumn')
    let decimalArray = [];
    decimalArray.push(Math.pow(2, b) - 1)
    let switchOperation = false
    for (var i = 1; i < a/2; i++) {
        let difference = Math.pow(2, b-i) - Math.pow(2, i)
        decimalArray.push((switchOperation ? decimalArray[i-1] + difference : decimalArray[i-1] - difference))
        switchOperation = !switchOperation
    }
    let result = decimalArray.map(value => {
        return Array.from(value.toString(2))
    })
    for (var i = Math.floor(a/2) - 1; i >= 0; i--) {
        result.push(result[i])
    }
    return result;
}

console.table(generateAnArray(4,4))
console.table(generateAnArray(10, 10))
console.table(generateAnArray(5, 7))
console.table(generateAnArray(1, 6))
// ewentualnie mozna sobie ta linijke odkomentowac i wpisac dowolne argumenty jako parametry skryptu
// console.table(generateAnArray(parseInt(process.argv[2]), parseInt(process.argv[3])))