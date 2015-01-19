/*
    By: Samuel Yeung
    
    This block of code (function) will only run when the button with an id 'main'
    is clicked. It will then take in the values of each text box then stores them
    in a variable. Then clears all the text boxes and calculate the interest with
    the formula.
*/

document.getElementById("main").onclick = function ()
{
    //Takes in the value of each text box with a specific id then stores them to a variable
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var year = document.getElementById('years').value;
    
    //Clears all text boxes by overwriting to it
    document.getElementById('principal').value = "";
    document.getElementById('rate').value = "";
    document.getElementById('years').value = "";
    
    //Calculates the interest using the formula and stores it into a variable
    var interest = principal * Math.pow((1 + rate/100),year);
    
    /*
        If this is too complicated, this can also be broken down to several steps
        to reach the same conclusion. Below is one of the ways (in this case the longest way)
        you can calulate the interest. (You can try this out by uncommenting the lines of code.
        Also use the formula that was provided in the slides as reference.)
    */
    
    //Converts the rate into decimal then stores it (r)
    //var decimalRate = rate/100;
        
    //Does the calculation of (1+r) then stores it
    //var decimalRatePlus = 1 + decimalRate;
        
    //Does the calculation of (1+r)^n then stores it
    //Remember that to do powers you would need the Math.pow(a,b)
    //where a is the base and b is your exponent.
    //var powerAnswer = Math.pow(decimalRatePlus, year);
    
    //Does the calulation of P*((1+r)^n) then stores it
    //var interest = principal * powerAnswer;
    
    /*
        NOTE: As you can see there is multiple ways to calculate using the formula.
        You can use one line or four lines. But I do recommend you that you try to
        keep it as little lines as possible. Computers do statements line by line,
        so therefore it is more efficient to calculate the interest in one line than
        to two or four lines. How is this more efficient? It might not be evident in 
        this case but as programs gets larger (as it will in this class) adding one or 
        more lines can change the time the computer takes to calculate the solution. This
        will have a great effect on the user as well as you who will probably be running 
        the program several times for debugging. Even if it saves 0.002 sec per run, if you
        run the program 50 times, that will save you 0.1 sec which is a great deal of time.
    */

    //Outputs the interest as well as the information the user has provided
    document.getElementById('output').textContent = 'A starting principal of $' + principal + ' will grow to $' + interest + ' after ' + year + ' year(s) with an interest rate of ' + rate + '%';
}