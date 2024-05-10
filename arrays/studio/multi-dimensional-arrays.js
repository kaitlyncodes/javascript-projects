let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let drawer1 = "water bottles, meal packs, snacks, chocolate".split(", ").sort();
let drawer2 = "space suits, jet packs, tool belts, thermal detonators".split(", ").sort();
let drawer3 = "parrots, cats, moose, alien eggs".split(", ").sort();
let drawer4 = "blankets, pillows, eyepatches, alarm clocks".split(", ").sort();

console.log("Cabinet 1:", drawer1);
console.log("Cabinet 2:", drawer2);
console.log("Cabinet 3:", drawer3);
console.log("Cabinet 4:", drawer4);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(drawer1, drawer2, drawer3, drawer4);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
