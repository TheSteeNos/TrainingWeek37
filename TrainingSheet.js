/*
    Hi.
    This is a set of exercises
    The idea is to practice a few things at a time.
    You do this by entering your answer after a task is given (see the example)

    DO NOT change any provided code unless the task specifically tells you to.
*/

/*
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log(" ");
console.log("Task: Example");
console.log(" ");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/*
    Task: A
    Write code that prints the sentence "Debugging is like being a detective in a crime drama where you are also the murderer" 
    100 times. 
    Remember we use console.log() to print things out.
*/
console.log(" ");
console.log("Task: A");
console.log(" ");
const debuggingCrimeDrama = "Debugging is like being a detective in a crime drama where you are also the murderer"

for (let index = 0; index < 100; index++) {
    console.log(debuggingCrimeDrama);
}

/*
    Task: B
    The following code is incorrect, can you fix the errors?
    This one isn't that simple, there are syntax errors and logical errors.
    Try to think about what we are trying to achieve.
*/
console.log(" ");
console.log("Task: B");
console.log(" ");

const max = 99;
for (let index = 0; index < max; index--); {
    console.log(index + " bottles of soda on the shelf");
    console.log(index + " bottles of soda on the shelf");

    console.log(
        "Take one down, pass it around." + (index - 1) + " bottles of soda on the shelf"
    );
    console.log("");
}

console.log("No more bottles of soda on the shelf");


/*
    Task: C
    Declare a variable for gravity, a variable for pi, and a variable for the number of people in a room. 
*/
console.log(" ");
console.log("Task: C");
console.log(" ");



/*
    Task: D
    Create a function that adds two numbers, the function should be named add
*/
console.log(" ");
console.log("Task: D");
console.log(" ");

// write your function here.



console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));

/*
    Task: E
    Use the variable people from the example and print the names in reverse order (using a loop)
    NB: You should not change people, just use its contents.
*/
console.log(" ");
console.log("Task: E");
console.log(" ");
for (let index = people.length - 1; index >= 0; index--) {
    let person = people[index];
    console.log(person);
}

/*
    Task: F
    Declare a variable for a list of phone numbers. Your list should have at least 3 numbers. 
*/
console.log(" ");
console.log("Task: F");
console.log(" ");

let familyPhoneNumbers = ["95044693", "95168817", "47152881", "40319098"]

/*
    Task: G
    Print only the last phone number in your list from Task F
*/
console.log(" ");
console.log("Task: G");
console.log(" ");

console.log(familyPhoneNumbers.slice(-4))

/*
    Task: H
    Print only the last names of the people in the list, using a loop.
*/
console.log(" ");
console.log("Task: H");
console.log(" ");

let peopleNames = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]

for (let index = 0; index < peopleNames.length; index++) {
    let person = peopleNames[index]
    console.log(person.slice(-1))
}