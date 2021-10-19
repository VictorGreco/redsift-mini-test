const task1 = [
    "apple",
    "pear",
    "lemon",
    "orange",
    "pineapple",
    "tomato",
    "lettuce",
    "mango",
    "apple",
    "pineapple",
    "lemon",
    "pear",
    "pear",
];

let fruitDictionary = {
    apple: 0,
    pear: 0,
    lemon: 0,
    orange: 0,
    pineapple: 0,
    tomato: 0,
    mango: 0,
    banana: 0
}

const countFruits = (dict, list) => {
    const dictReducer = (dict, fruit) =>
        (dict[fruit] !== undefined ? dict[fruit] += 1 : null, dict);

    return list.reduce(dictReducer, dict);
}

const getFruitLog = (fruit, fruitDictionary) => {
    const cammelCaseFruitName = `${fruit[0].toUpperCase()}${fruit.slice(1)}`;
    const fruitCount = fruitDictionary[fruit];

    return `${cammelCaseFruitName}: ${fruitCount}`;
}

const printFruitLogs = () => {
    fruitDictionary = countFruits(fruitDictionary, task1);

    for (fruit in fruitDictionary) {

        console.log(getFruitLog(fruit, fruitDictionary));
    }
}


module.exports = {
    printFruitLogs
}


