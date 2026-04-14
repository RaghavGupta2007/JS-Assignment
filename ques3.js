var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

if (N < 1 || N > 1000000 || K < 2 || K > 9) 
{
    alert("Invalid input");
} 
else 
{
    var result = -1;

    for (var X = 0; X <= 100000; X++) 
    {
        var num = N + X;
        var nu=num;
        var reversed = 0;
        while (nu > 0) {
            reversed = reversed * 10 + nu % 10;
            nu = Math.floor(nu / 10);
        }

        if (num === reversed && num % K === 0) 
        {
            result = X;
            break;
        }
    }

    alert(result);
}