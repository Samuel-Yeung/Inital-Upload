/*
    By: Samuel Yeung
    
    This block of code (function) will only run when the button with an id 'main'
    is clicked. It will then take in the values of each text box then stores them
    in a variable. Calculates the conversion with the formula.
*/

document.getElementById("main").onclick = function ()
{
    //Takes in the value of each text box with a specific id then stores them to a variable
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    
    //Calculates the conversion using the formula and stores it into a variable
    var average = (num1 + num2 + num3) / 3;
    
    //Overwrites the HTML of 'output'
    document.getElementById('output').innerHTML = 
        
        '<ul>' + 
        '<li>first number entered: ' + num1 + '</li>' +
        '<li>second number entered: ' + num2 + '</li>' +
        '<li>third number entered: ' + num3 + '</li>' +
        '<li>average is: ' + average + '</li>' + 
        '<ul>';
        
}