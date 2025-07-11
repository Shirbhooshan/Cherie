document.getElementById('emailForm').addEventListener('submit',function(event){
    event.preventDefault(); // prevents page refreshing all over

    const emailValue = document.getElementById('email').value; //gets value and keeps in emailvalue variable

    if (emailValue==='')
    {
        alert('Unsuccessful: Email cannot be left empty');
    }
    else{
        alert('Successful entry!');
    }
}
);