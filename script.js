var UserInput = document.getElementById("UserInput");
var DisplayUserInput = '';


function Press(symbol){
    DisplayUserInput+=symbol;
    UserInput.value = DisplayUserInput;
}

function Equal(){
    try 
    {
        answer = eval(DisplayUserInput);
        if (answer === undefined) {
            throw "Error";
        }
        UserInput.value = answer;
        DisplayUserInput = '';
    }
    catch {
        DisplayUserInput = '';
        console.log('Error');
        UserInput.value = "Error";
        // setTimeout('1000');
        UserInput.value = '';
    }   
}

function ClearInput(){
    DisplayUserInput = '';
    UserInput.value = '';
}