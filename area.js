/*
    By: Samuel Yeung
    
    This block of code (function) will only run when the button with an id 'main'
    is clicked. It will then take in the values of each text box then stores them
    in a variable. Calculates the conversion with the formula.
*/

document.getElementById("main").onclick = function ()
{
    //Takes in the value of each text box with a specific id then stores them to a variable
    var poolRadius = document.getElementById('radius').value;
    
    //Calculates the conversion using the formula and stores it into a variable
    var poolArea = Math.PI * poolRadius * poolRadius;
    
    //Overwrites the text box of 'area' with the calcuated area
    document.getElementById('area').value = poolArea;
}