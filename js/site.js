//get values
function getValues(){
    document.getElementById("resultArea").classList.add("invisible");

    if(document.getElementById("userString").value == ""){
        alert("Please enter a valid string")
    }else{
    let userString = document.getElementById("userString").value;
    userString = userString.toLowerCase().replace(/[^a-z0-9]/g,'');
    let revString = tacoCat(userString);
    displayResults(userString, revString);
    }
}

function tacoCat(userString){
    let revString = [];

    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index];        
    }

return revString;
}

function displayResults(userString, revString){

    if(userString == revString){
        document.getElementById("displayResults").innerHTML = `Success!! <span class="result">${userString}</span> is a palindrome!`
    }else { document.getElementById("displayResults").innerHTML = `<span class="result">${userString}</span> is not a palindrome.`}
    document.getElementById("resultArea").classList.remove("invisible");
}