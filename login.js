let Signinbtn= document.getElementById("Signinbtn");
        let Signupbtn= document.getElementById("Signupbtn");
        let nameField= document.getElementById("nameField");
        let title= document.getElementById("title");

        Signinbtn.onclick= function(){
            nameField.style.maxHeight= "0";
            title.innerHTML="Sign In";
            Signupbtn.classList.add("disable");
            Signinbtn.classList.remove("disable");
        }

        
        Signupbtn.onclick= function(){
            nameField.style.maxHeight= "60px";
            title.innerHTML="Sign Up";
            Signupbtn.classList.remove("disable");
            Signinbtn.classList.add("disable");
        }