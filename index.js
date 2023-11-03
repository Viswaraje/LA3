function validate()
{

    var username=document.getElementById("username");
    var password=document.getElementById("password1");


    if(username.value.trim()==""||password.value.trim()=="")
    {
        alert("no blank values allowed");
        return false;
    }

    else{
        confirm("Ready to submit the form?");
        return true;
    }
}