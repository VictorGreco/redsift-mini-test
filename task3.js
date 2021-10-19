const task8 = [
    [2, 5, 1, 2, 3, 5, 1, 2, 4],
    [2, 1, 1, 2, 3, 5, 1, 2, 4],
    [2, 3, 4, 5],
    [2, 5, 5, 2, 3, 5, 1, 2, 4]
]

const findFirstRecurringCharacter = (nestedList) => {

    const mapLists = (list) => {
        const dict = {};

        for (number of list) {
            if (dict[number] !== undefined) {
                return number;
            }

            dict[number] = 1;
        }
    }

    return nestedList.map(mapLists);
}


const printFindFirstRecurringCharacter = () => {
    console.log(findFirstRecurringCharacter(task8));
}

module.exports = {
    printFindFirstRecurringCharacter
}