var count = 2;

function  validate()
{
    var un = document.login.username.value;
    var pw = document.login.password.value;
    var valid = false;
    var usernameArray = ["Bob","Marley"];
    var passwordArray = ["12345","54321"];
    for (var i = 0; i < usernameArray.length; i++) 
{   
    if ((un == usernameArray[i]) && (pw == passwordArray[i]))
    {
        
        valid = true;
        break;
    } 
}

    if (valid){
        alert ("Login was successful");
        window.location = "www.google.ie";
        return false;
    }
    var again = "tries";
    if (count ==1)
    {
        again = "try"
    }
    if (count >= 1)
    {
        alert ("wrong password or username");
        count--;
    }
    else
    {
        alert("Incorrect password or username. You are now blocked.");
        document.login.username.value = "You are now blocked!";
        document.login.password.value = "Fools you can't see this";
        document.lofin.username.disabled = true;
        document.login.password.disabled = true;
        return false;
    }
}