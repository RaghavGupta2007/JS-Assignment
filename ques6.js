var a = parseInt(prompt("Enter correct answers (a):"));
var b = parseInt(prompt("Enter partially correct answers (b):"));
var c = parseInt(prompt("Enter wrong answers (c):"));
 
if (a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100) 
{
    alert("Invalid input. a, b and c must be between 0 and 100.");
} 
else 
{
    var score = 3 * a + b - 2 * c;
 
    if (score < 0) 
    {
        score = 0;
    }
 
    if (a + b + c > 50) 
    {
        score = score - 10;
    }
 
    if (score < 0) 
    {
        score = 0;
    }
 
    if (score >= 60) 
    {
        alert(score + ", PASS");
    } 
    else 
    {
        alert(score + ", FAIL");
    }
}