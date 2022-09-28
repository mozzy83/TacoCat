function getValues(){
    document.getElementById("resultArea").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    if(userString == ""){
        alert("Please enter a valid string")
    }else{
    let newString = userString.toLowerCase().replace(/[^a-z0-9]/g,'');
    let revString = tacoCat(newString);
    displayResults(newString, userString, revString);
}
}

function tacoCat(newString){
    let revString = [];

    for (let index = newString.length-1; index >= 0; index--) {
        revString += newString[index];        
    }

return revString;
}

function displayResults(newString, userString, revString){

    if(newString == revString){
        document.getElementById("displayResults").innerHTML = `Success!! <span class="result">${userString}</span> is a palindrome!`
    }else { document.getElementById("displayResults").innerHTML = `<span class="result">${userString}</span> is not a palindrome.`}
    document.getElementById("resultArea").classList.remove("invisible");
}