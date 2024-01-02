var signinEmailInput = document.getElementById('signinEmail');
var signinPasswordInput = document.getElementById('signinPassword');
var emailMessage = document.getElementById('emailMessage');
var passwordMessage = document.getElementById('passwordMessage');
var eyeIcon = document.querySelector('.eye-icon');


var errorPopup= document.getElementById('errorPopup');
var errorBtn = document.getElementById('errorBtn')






eyeIcon.addEventListener('click', function() {
    if (signinPasswordInput.type === 'password') {
        signinPasswordInput.type = 'text';
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        signinPasswordInput.type = 'password';
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});





errorBtn.addEventListener('click', function(){
    errorPopup.classList.remove('open-popup');
})




function login() {
    var storedUsers = JSON.parse(localStorage.getItem('Users')) || [];
    var enteredEmail = signinEmailInput.value;
    var enteredPassword = signinPasswordInput.value;

    if (regexEmail() && regexPassword()) {
        var isValidUser = false;
        var userName = ''; 

        for (var i = 0; i < storedUsers.length; i++) {
            if (
                storedUsers[i].signupEmail === enteredEmail &&
                storedUsers[i].signupPassword === enteredPassword
            ) {
                isValidUser = true;
                userName = storedUsers[i].signupName; 
                break;
            }
        }

        if (isValidUser) {
            localStorage.setItem('loggedInUser', userName); 
            window.location.href = 'home.html';
            clearForm();
        } else {
            errorPopup.classList.add('open-popup');
            emailMessage.innerHTML='';
            passwordMessage.innerHTML='';
        }
    }
}






function clearForm(){
    signinEmailInput.value = '';
    signinPasswordInput.value= '';
}

function regexEmail(){
    var emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var signinEmail = signinEmailInput.value;
    if (emailRegex.test(signinEmail)){
        emailMessage.innerHTML='Valid Email';
        emailMessage.style.color = 'green';
        emailMessage.style.textAlign = 'start';
        return true;

    }
    else {
        emailMessage.innerHTML = 'Please enter the email in the format: name@example.com';
        emailMessage.style.color = '#DC3546';
        emailMessage.style.textAlign = 'start';
        return false;
    }


}

    function regexPassword(){
        var passwordRegex = /^[A-Z](?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
        var signinPassword = signinPasswordInput.value;
        if (passwordRegex.test(signinPassword)){
            passwordMessage.innerHTML='Valid Password';
            passwordMessage.style.color = 'green';
            passwordMessage.style.textAlign = 'start';
            return true;
    
        }
        else {
            passwordMessage.innerHTML = 'Password should start with an uppercase letter, contain 8 characters, and include at least one special character.';
            passwordMessage.style.color = '#DC3546';
            passwordMessage.style.textAlign = 'start';
            return false;
        }
    

    }
    


    