const billamount=document.querySelector("#bill-amount")
const Cashgiven=document.querySelector("#cash-given")
const submitbtn=document.querySelector("#checkbtn")

const message=document.querySelector("#error-message")


function validatebillandcashamount(){
    if(billamount.value>0){
       

    }
    else{
        showmessage("please enter a valid cash amount");
        

    }
}
function hidemessage(){
    message.style.display="none";
}

function showmessage(msg){
    message.style.display="block";
    message.innerText=msg;
}




submitbtn.addEventListener("click",validatebillandcashamount)

