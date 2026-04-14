var current = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

if (current < 1 || current > 1000000 || seed < 0 || seed > 9) {
    alert("Invalid input");
} 
else {
    for (var i = 0; i < 3; i++) 
    {
        if (current % 2 === 0)
        {
            current = current / 2 + seed;
        } 
        else 
        {
            current = current * 3 - seed;
        }
    }

    var fNum = current;

    if (fNum >= 100 && fNum <= 999) 
    {
        var middleDigit = Math.floor((fNum % 100) / 10);
        if (middleDigit === seed)
        {
            alert("YES, " + fNum);
        } 
        else 
        {
            alert("NO, " + fNum);
        }
    }
    else 
    {
        alert("NO, " + fNum);
    }
}
