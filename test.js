const people = [
    {name: "Saju", age: 28},
    {name: "Raju", age: 32},
    {name: "Kakon", age: 17},
    {name: "Soikat", age: 18}
];

const peopleOver18 = (collection) => {
    let results = [];

    for(let i = 0; i < collection.length; i++) {
        let person = collection[i];

        if(person.age >= 18) {
            results.push(person);
        }
    }

    console.log(results);
}

const peopleOver18v2 = function(collection) {
    return collection.filter(function(person) {
        console.log(person.age >= 18);
    })
}

const peopleBetween18and22 = function(collection) {
    let result = [];

    for(let i = 0; i < collection.length; i++) {
        let person = collection[i];

        if(person.age >= 18 && person.age <= 22) {
            result.push(person);
        }
    }

    console.log(result);


}

peopleOver18v2(people);

