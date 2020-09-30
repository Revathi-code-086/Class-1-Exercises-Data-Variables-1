// Code part A here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = 0.621;


// Code part B here:
console.log(typeof 'shuttleName');
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);


// Code parts C & D here:
//for Mars:
milesToMars = distanceToMars * milesPerKilometer;
hours = milesToMars / shuttleSpeed;
days = hours / 24;
//for Moon:
milesToMoon = distanceToMoon * milesPerKilometer;
hoursForMoon = milesToMoon / shuttleSpeed;
daysToMoon = hoursForMoon / 24;
/*console.log("Miles to reach Mars: "+milesToMars);
console.log("Hours to take travel:"+hours);
console.log("Days to reach Mars:"+days);*/
console.log(shuttleName+" will take "+days+" days to reach Mars.");


// Code part E here:
console.log(shuttleName+" will take "+daysToMoon+" days to reah the moon.");


