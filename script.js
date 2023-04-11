const form=document.getElementById("form");
var emailField=document.getElementById("mail");
var emaillabel=document.getElementById("mail-label");
var emailerror=document.getElementById("e-error");
var passwordField=document.getElementById("password");
var passwordlabel=document.getElementById("password-label");
var passworderror=document.getElementById("p-error");
var addField=document.getElementById("address");
var addlabel=document.getElementById("address-label");
var adderror=document.getElementById("add-error");
var cityField=document.getElementById("city");
var citylabel=document.getElementById("city-label");
var cityerror=document.getElementById("c-error");
var selectField=document.getElementById("state");
var selectlabel=document.getElementById("select-label");
var selecterror=document.getElementById("s-error");
var pinField=document.getElementById("pincode");
var pinlabel=document.getElementById("pincode-label");
var pinerror=document.getElementById("pin-error");
const checkField = document.getElementById("gridCheck");
const checkerror = document.getElementById("check-error")


function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
}

function validatepassword()
{
    if(passwordField.value===""){
        passworderror.innerHTML="please enter the correct password";
        passwordField.style.border="2px solid red";
        return false;
        }

        else if(!passwordField.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
            passworderror.innerHTML = "password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character,";
            passwordField.style.border = "2px solid red";
            return false;
         }
    
        else{
            passworderror.innerHTML="";
            password.style.border="2px solid green";
            return true; 
    
        }
}

function validateaddress()
{
    if(addField.value===""){
        adderror.innerHTML="Address cannot be blank";
        addField.style.bordercolor="red";
        return false;
        }

        else if(!addField.value.match(/^[a-z A-Z 0-9.]*$/)){
            adderror.innerHTML ="Please Enter a Valid address";
            addField.style.border = "2px solid red";
            return false;
        }
    
        else{
            adderror.innerHTML="";
            addField.style.border="2px solid green";
            return true; 
    
        }
}

function validatecity()
{
    if(cityField.value===""){
        cityerror.innerHTML="City cannot be black";
        cityField.style.border="2px solid red";
        return false;
        }
     
        else{
            cityerror.innerHTML="";
            cityField.style.border="2px solid green";
            return true; 
    
        } 
    
}


function validatestate()
{
    if(selectField.value==="-1"){
        selecterror.innerHTML="select your State";
        selectField.style.border="2px solid red";
        return false;
        }

   else{
        selecterror.innerHTML="";
        selectField.style.border="2px solid green";
       return true; 
    
        }   

}

function validatepincode()
{
    if(pinField.value===""){
        pinerror.innerHTML="Pincode cannot be empty";
        pinField.style.border="2px solid red";
        return false;
        }
        else if(pinField.value.length>6 || pinField.value.length<6){
            pinerror.innerHTML="Maximum six digits required";
            pinField.style.border="2px solid red";
            return false;
        }
    
        else{
            pinerror.innerHTML="";
            pinField.style.border="2px solid green";
            return true; 
    
        }
}




form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
   })

   function checkinput() {
   
    const emailvalue = emailField.value.trim();
    const passwordvalue = passwordField.value.trim()
    const addressvalue = addField.value.trim();
    const cityvalue = cityField.value.trim();
    const selectvalue= selectField.value.trim();
    const pincodevalue = pinField.value.trim();

    var check = form.querySelectorAll('input[name="gridCheck"]:checked');
    if (!check.length) {
        checkerror.innerHTML = "please check your full details";
        return false;
    }
    
    
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Password:"+" " +passwordvalue + "<br>");
    document.write("Address:"+" " + addressvalue + "<br>");
    document.write("City:"+" " + cityvalue + "<br>");
    document.write("State:"+" " + selectvalue + "<br>");
    document.write("Pincode:"+" " + pincodevalue + "<br>");

   } ;

