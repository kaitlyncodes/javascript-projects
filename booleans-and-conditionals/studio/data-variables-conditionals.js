// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("correct amount of astronauts");
} else {
    console.log("Too many astronauts");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts are ready");
} else {
    console.log("astronauts not ready");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit ) {
 console.log("Correct amount of mass");
} else { 
    console.log("Mass is exceeded");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log("fuel temp is good");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel level full");
} else {
    console.log("Need more fuel");
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("weather is good");
} else {
    console.log("weather not clear");
}
// Verify shuttle launch can proceed based on above conditions

console.log("Shuttle launch may proceed!");