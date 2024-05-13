const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
startingFuelLvl = 0, numAstro = 0, altitude = 0;
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (startingFuelLvl <= 5000 || startingFuelLvl > 30000 || isNaN(startingFuelLvl)) {
    startingFuelLvl = input.question("Enter starting fuel level");
  }
  console.log("Starting fuel level:", startingFuelLvl);
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numAstro < 1 || numAstro > 7); {
    numAstro = input.question("Type in the number of astronauts");
  };
  console.log("Number of astronauts:", numAstro);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLvl-100*numAstro >= 0) {
  altitude += 50;
  startingFuelLvl -= 100*numAstro;
  }

//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
let Output = `The shuttle gained an altitude of ${altitude} km.`
//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitude >= 2000); {
  console.log("orbit achieved!")
} else {
  console.log("Failed to reach orbit.")
}