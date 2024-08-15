function validateForm()
{
    let isValid=validateUsername();

    if(isValid)
    {
        alert("Form Is Valid Success");
        return true;
    }
    else 
    {
        return false;
    }
        
}


//Validate Username
function validateUsername()
{
    let inputEl=document.getElementById('usn');
    let username=inputEl.value.trim();
    let nameRegex = /^[a-zA-Z\-]+$/;

    if(username=='')
    {
        applyColors(inputEl,"orangered");
        alert("Please Enter Username");
        return false;
    }
    else if(username.length<=4)
    {
        applyColors(inputEl,"orangered");
        alert("Min. 4 Chars Required");
        return false;
    }
    else if(nameRegex.test(username))
    {
        applyColors(inputEl,"orangered");
        alert("First Letter Should Be Char");
        return false;
    }
    else
    {
        return true;
    }
}


function applyColors(ele,color)
{
    ele.style.border=`2px solid ${color}`;
    ele.style.boxShadow=`0 0 10px ${color}`;
}