var account;
var userAccountString = localStorage.getItem('account');
var userAccountObj = JSON.parse(userAccountString);
console.log(userAccountObj);

// Function Create Account
function createAccount() {
    account = {   
        name: document.getElementById('fullName').value,
        email: document.getElementById('emailAdress').value,
        password: document.getElementById('createPassword').value
    }    
    
    window.localStorage.setItem('account', JSON.stringify(account));
    userAccountString = window.localStorage.getItem('account');
    userAccountObj = JSON.parse(userAccountString);
    console.log(userAccountObj);    
}

// Function Log In
function logIn() {
    console.log(userAccountObj);
    let tempoArray = [];
    tempoArray.push(userAccountObj);

    // Verify if a Account is created
    if (tempoArray.length === 0) {
     alert("Please create Account!");
    }

     //If true --> 
     else if (tempoArray.length !== 0) {
        let tempoArray = [];
        tempoArray.push(userAccountObj);
            tempoArray.forEach(element => {

        //Verify Usernamn and Password
        if (document.getElementById("user").value == element.email 
        && document.getElementById("password").value == element.password) {
        
            //Success --> index.html 
        setTimeout(function () {window.location.href = "index.html";}, 0);

        alert("Great success!");

            //Alert if wrong email and/or password
        } else if (document.getElementById("user").value != element.email || null
        || document.getElementById("password").value != element.password || null) {
            alert("Wrong email/password, try again!"); 
        }
    });  
    }
}

