var base = parseInt(prompt("Enter base:"));
var distance = parseInt(prompt("Enter distance:"));
var minutesLate = parseInt(prompt("Enter minutesLate:"));
var seed = parseInt(prompt("Enter seed:"));
if(base < 0 || distance <= 0 || minutesLate <= 0 || seed <= 0 || base>1000 || distance>100 || minutesLate>120 || seed>9)
{
    alert("Invalid input. Please enter valid values.");
} 
else
 {
    var fare = base + 7 * distance;

if (minutesLate > 15) 
{
    fare = fare + 20;
}
if (distance > 10) 
{
    fare = 1.10 * fare;
}

if (seed % 2 !== 0) 
{
    fare = fare - seed;
} 
else 
{
    fare = fare + seed;
}

if (fare % 5 !== 0)
{
    if(fare % 5 > 2.5)
    {
    fare = fare + (5 - (fare % 5));
    }
    else
    {
    fare = fare - (fare % 5);
    }
}
alert(fare);
}