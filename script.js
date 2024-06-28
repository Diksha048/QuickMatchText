const input1Element = document.getElementById("input1text");
const input2Element = document.getElementById("input2text");

const resultElement = document.getElementById("match-result-text");

function CompareText()
{
    if(input1Element.value == input2Element.value ){
        resultElement.innerText = "Match found!"
        resultElement.style.color = "#3d3d5c"
    }
    else{
        resultElement.innerText = "Not Matched!!"
        resultElement.style.color = "black"
    }
}
