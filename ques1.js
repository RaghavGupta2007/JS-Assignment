var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

if (L < 1 || R > 1000000 || L > R || K < 2 || K > 9) {
    alert("Invalid input");
    } 
    else {
    var count = 0;

    for (var x = L; x <= R; x++) {
        if (x % K !== 0) 
        continue;
        var num=x;
        var digits ;
        var hasZero = false;
        var sum=0;
        for(;num>0;num=Math.floor(num/10))
        {
            digit=num%10;
            sum+=digit;
            if(digit===0)            
            {
                hasZero=true;
                break;
            }
        }
        if (hasZero) continue;

        var isPrime = sum >= 2;
        for (var d = 2; d <= Math.sqrt(sum); d++) {
            if (sum % d === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) count++;
    }

    alert(count);
}