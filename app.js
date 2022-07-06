const billamount=document.querySelector("#bill-amount")
const Cashgiven=document.querySelector("#cash-given")
const submitbtn=document.querySelector("#checkbtn")

const message=document.querySelector("#error-message")


function validatebillandcashamount(){
    if(billamount.value>0){

        if(Cashgiven.value>billamount.value){
            const amounttobereturned=billamount.value-Cashgiven.value;
            calculatechange(amounttobereturned);
            
        }else{
            showmessage("Do you Want to wash the plates of the Manager")

        }
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

