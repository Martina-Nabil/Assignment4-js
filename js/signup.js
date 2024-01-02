
var signupNameInput = document.getElementById('signupName');
var signupEmailInput = document.getElementById('signupEmail');
var signupPasswordInput = document.getElementById('signupPassword');
var nameMessage = document.getElementById('nameMessage');
var emailMessage = document.getElementById('emailMessage');
var passwordMessage = document.getElementById('passwordMessage');
var message = document.getElementById('message');
var notification = document.getElementById('notification');
var eyeIcon = document.querySelector('.eye-icon');
var successPopup = document.getElementById('successPopup');
var errorPopup= document.getElementById('errorPopup');
var successBtn = document.getElementById('successBtn');
var errorBtn = document.getElementById('errorBtn');





eyeIcon.addEventListener('click', function() {
    if (signupPasswordInput.type === 'password') {
        signupPasswordInput.type = 'text';
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        signupPasswordInput.type = 'password';
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});

successBtn.addEventListener('click',function(){
    successPopup.classList.remove('open-popup');
    window.location.href = 'index.html';

})


errorBtn.addEventListener('click', function(){
    errorPopup.classList.remove('open-popup');
})


function signup() {
    if (regexName() && regexEmail() && regexPassword()) {
            var users = {
            signupName: signupNameInput.value,
            signupEmail: signupEmailInput.value,
            signupPassword: signupPasswordInput.value
    }
    var storedUsers = JSON.parse(localStorage.getItem('Users')) || [];
    var isExistingUser = false;
    for (var i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].signupEmail === users.signupEmail) {
            isExistingUser = true;
                break; 
        }
    }

    if (isExistingUser) {
        errorPopup.classList.add('open-popup');
        nameMessage.innerHTML='';
        emailMessage.innerHTML='';
        passwordMessage.innerHTML='';
    } else {
        successPopup.classList.add('open-popup');
        storedUsers.push(users);
        localStorage.setItem('Users', JSON.stringify(storedUsers));
        clearForm();
        nameMessage.innerHTML='';
        emailMessage.innerHTML='';
        passwordMessage.innerHTML='';
       
        
    }
    } 
}
    
    function clearForm(){
        signupNameInput.value='';
        signupEmailInput.value = '';
        signupPasswordInput.value= '';
    }




function regexName(){
    var nameRegex =  /^[a-zA-Z]{3,10}$/;
    var signupName = signupNameInput.value;
    if (nameRegex.test(signupName)){
        nameMessage.innerHTML='Valid Name';
        nameMessage.style.color = 'green';
        nameMessage.style.textAlign = 'start';
        return true;

    }
    else {
        nameMessage.innerHTML = 'Name should contain 3 to 10 characters.';
        nameMessage.style.color = '#DC3546';
        nameMessage.style.textAlign = 'start';
        return false;
    }


}




function regexEmail(){
    var emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var signupEmail = signupEmailInput.value;
    if (emailRegex.test(signupEmail)){
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
        var signupPassword = signupPasswordInput.value;
        if (passwordRegex.test(signupPassword)){
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
    


