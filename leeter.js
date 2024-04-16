function leetify(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let outputSign = input[i];  

        if (outputSign.toLowerCase() == "a"){
            output += "4";
        } else if (outputSign.toLowerCase() == "e"){
            output += "3";
        } else if (outputSign.toLowerCase() == "i"){
            output += "1";                    
        } else if (outputSign.toLowerCase() == "o"){
            output += "0";
        } else if (outputSign.toLowerCase() == "а"){
            output += "4";
        } else if (outputSign.toLowerCase() == "е"){
            output += "3";
        } else if (outputSign.toLowerCase() == "и"){
            output += "1";
        } else if (outputSign.toLowerCase() == "o"){
            output += "0";
        } else if (outputSign.toLowerCase() == "я"){
            output += "9";
        } else if (outputSign.toLowerCase() == "б"){
            output += "6";
        } else {
            output += outputSign;
        }
    }
    return output;
}

function processInput() {
    let inputValue = document.getElementById('inputField').value;
    let output = leetify(inputValue);
    document.getElementById('outputField').textContent = output;
}