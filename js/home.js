var userName = document.getElementById('userName');

var logoutBtn = document.getElementById('logoutBtn');

var loggedInUserName = localStorage.getItem('loggedInUser');

    if (loggedInUserName) {
        userName.style.textTransform = 'capitalize';
        userName.innerText = "Welcome, " + loggedInUserName + "!";
    }

logoutBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
})