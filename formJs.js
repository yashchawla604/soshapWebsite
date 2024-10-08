//javascript for contact form




function checkForEmptyfield()                                               //defintion of checkforemptyfield() function 
{
    var fNameCheck=document.getElementById("fName");
    var fname=fNameCheck.value;

    var lNameCheck=document.getElementById("lName");
    var lname=lNameCheck.value;

    var emailCheck=document.getElementById("emailId");
    var mail=emailCheck.value;

    if(fname=="" || lname=="" || mail=="")                               //conditionn for empty value
    {
        alert("Please fill the empty fields");
    }

    else
    alert("Thank you!")
}

function reset()                                       //definition of reset() function 
{
    
    var fNamereset=document.getElementById("fName").value="";
    
    
    var lNamereset=document.getElementById("lName").value="";
    

    var emailreset=document.getElementById("emailId").value="";

    var messagereset=document.getElementById("message").value="";
    
}

let sbttn=document.getElementById("submit");                   //getting acccess of submit div
sbttn.onclick=function(){checkForEmptyfield();}                 //submit button .... called function for checking if any field is empty

let rbttn=document.getElementById("reset");                     //getting access of reset div 
rbttn.onclick=function(){reset();}                              // calling reset() function , once user clicks on submit button