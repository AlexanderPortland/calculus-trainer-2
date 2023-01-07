if (document.getElementById('sign-in-button') != undefined) document.getElementById('sign-in-button').onclick = function(){
    alert('time to sign in');
    var password = document.getElementById("password-signin").value;
    var email = document.getElementById("email-signin").value;
    TrySignIn(email, password);
}

function TrySignIn(_email, _password){
    if (_email != undefined && _password != undefined){
        alert();
        alert();
    } else {
        alert()
    }
}