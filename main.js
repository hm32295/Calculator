let inputScreen = document.querySelector("header .input");
let section = document.querySelector ("section")



let arr = [7,8,9,"/",4,5,6,"x",1,2,3,"-",".",0,"+","C"];

for(let i = 0 ; i < arr.length ; i++){
        let inputTypeNum = document.createElement("input");
            inputTypeNum.value = arr[i];
            inputTypeNum.className = arr[i]
            inputTypeNum.type = "button";
            section.appendChild(inputTypeNum)
}


let result = {
    prev: "",
    next : "",
    oper : "",
    fun : ()=>{
        return `${result.prev}${result.oper}${result.next}`
    }
}

let trueT = true;

// inputScreen.innerHTML
function parint(e){

    if(e.target.value ===  e.target.className){

        if(e.target.value === "C"){
            inputScreen.innerHTML = "";
            result.oper =""
            result.prev =""
            result.next ="";
            trueT = true
        }else{
            if(trueT &&
                !(  e.target.value === "/" ||
                    e.target.value === "x" ||
                    e.target.value === "+" ||
                    e.target.value === "-" )
                
                
                ){
                    
                    result.prev += "" + e.target.value
                  
            }else{
                if(!(   e.target.value === "/" ||
                        e.target.value === "x" ||
                        e.target.value === "+" ||
                        e.target.value === "-" )){

                    result.next += "" + e.target.value
                }
            }
            if( result.prev !== "" &&
                (e.target.value === "/" ||
                e.target.value === "x" ||
                e.target.value === "+" ||
                e.target.value === "-") 
            ){
               
                if(result.oper === "x" && result.next !== "" && result.prev !== "" ){
                    inputScreen.innerHTML = +result.prev * +result.next;
                    result.prev = inputScreen.innerHTML;
                    result.next = "";
                    inputScreen.innerHTML = result.fun();
                }
                if(result.oper === "-" && result.next !== "" && result.prev !== "" ){
                    inputScreen.innerHTML = +result.prev - +result.next;
                    result.prev = inputScreen.innerHTML;
                    result.next = "";
                    inputScreen.innerHTML = result.fun();
                }
                if(result.oper === "+" && result.next !== "" && result.prev !== "" ){
                    inputScreen.innerHTML = +result.prev + +result.next;
                    result.prev = inputScreen.innerHTML;
                    result.next = "";
                    inputScreen.innerHTML = result.fun();
                }
                if(result.oper === "/" && result.next !== "" && result.prev !== "" ){
                    inputScreen.innerHTML = +result.prev / +result.next;
                    result.prev = inputScreen.innerHTML;
                    result.next = "";
                    inputScreen.innerHTML = result.fun();
                }
                 trueT = false
                result.oper = e.target.value;
                inputScreen.innerHTML = result.fun();

               
                
            }else{
                inputScreen.innerHTML += e.target.value
                }
        }

    }
    
}

document.addEventListener("click",parint)


// Equal

let equal = document.getElementById("input")

function resultEqual (){
    
    if(result.oper === "+"){
        inputScreen.innerHTML = +result.prev + +result.next;
     
    }
    if(result.oper === "-"){
        inputScreen.innerHTML = +result.prev - +result.next;
    
    }
    if(result.oper === "/"){
        inputScreen.innerHTML = +result.prev / +result.next;
       
    }
    if(result.oper === "x"){
        inputScreen.innerHTML = +result.prev * +result.next;
   
    }
    result.prev = inputScreen.innerHTML;
    result.next = "";

}
equal.onclick = resultEqual



