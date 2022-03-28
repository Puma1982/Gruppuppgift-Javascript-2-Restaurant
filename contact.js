
function sendEmail(e) {
    e.preventDefault ();
    emailjs.sendForm('service_yil2fuj', 'template_f1daxsm', e.target, "user_KcSNBl8d6Alo2ZATWZDvH"
    ).then (res => {
    console.log(res);
    }).catch(err => console.log(err));
    e.target.reset()
}


function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

    var text;
    if (name.length < 4) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 5) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 3) {
        text = "Please Enter More Than 3 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}