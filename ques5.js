var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));
 
var divisor = seed + 2;
var sum = 0;
var m = 0;
 
while (sum < N) {
    m++;
    if (m % divisor !== 0) {
        sum += m;
    }
}
 
alert(m + " " + sum)