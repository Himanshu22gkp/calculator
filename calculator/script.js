const btnsEle = document.querySelectorAll("button")
const inputEle = document.getElementById("result")

for(let i = 0; i<btnsEle.length; i++){
    btnsEle[i].addEventListener("click", ()=>{
        const btnValue = btnsEle[i].textContent
        if(btnValue === "AC"){
            clearResult()
        }
        else if(btnValue === "="){
            calculateResult()
        }    else if (btnValue === "DEL") {
                deleteLastCharacter()
        }else{
            appendValue(btnValue)
        }
    })
}


function clearResult(){
    inputEle.value = ""
}

function calculateResult(){
    inputEle.value = eval(inputEle.value)
}
function appendValue(btnValue){
    inputEle.value += btnValue
}
function deleteLastCharacter() {                  
    inputEle.value = inputEle.value.slice(0, -1)
}
    