
const monthlyRent = 500;
let yearlyRent = monthlyRent + 12;
console.log(yearlyRent);

yearlyRent = 1;
console.log(yearlyRent);
const firstName = "Maureen";
const lastName = "Wepngong. ";
const sentence = "Hello, " + firstName + " " + lastName + "How are you?!";
console.log(sentence); 
 /* Instructions
Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!
In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.
You have four tasks related to the time spent cooking the lasagna.


 TASK 1
Define the expected oven time in minutes */
expect(EXPECTED_MINUTES_IN_OVEN).toBe(40)
/*TASK 2
Calculate the remaining oven time in minutes */
expect(remainingMinutesInOven(25)).toBe(15);
expect(remainingMinutesInOven(5)).toBe(35);
expect(remainingMinutesInOven(39)).toBe(1);
/*Test 3
TASK 3
Calculate the preparation time in minutes */
expect(remainingMinutesInOven(40)).toBe(0);
expect(remainingMinutesInOven(0)).toBe(40);
expect(preparationTimeInMinutes(1)).toBe(2);
expect(preparationTimeInMinutes(2)).toBe(4);
expect(preparationTimeInMinutes(8)).toBe(16);

/* TASK 4
totalTimeInMinutes > calculates the total cooking time*/
expect(totalTimeInMinutes(1, 5)).toBe(7);
expect(totalTimeInMinutes(4, 15)).toBe(23);
expect(totalTimeInMinutes(1, 35)).toBe(37);
console.log(totalTimeInMinutes)