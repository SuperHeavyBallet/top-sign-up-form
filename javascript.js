const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");
const errorMessage = document.getElementById("error-message");


password.addEventListener('input', event => {

    ComparePasswords(password.value, passwordConfirm.value);
})

passwordConfirm.addEventListener('input', event => {

    ComparePasswords(password.value, passwordConfirm.value);
})

function ComparePasswords(passwordCheck, passwordConfirmCheck)
{

    if (passwordCheck === passwordConfirmCheck)
    {

        if (passwordCheck.trim() !== '' && passwordConfirmCheck.trim() !== '')
        {
        password.className = ("match");
        passwordConfirm.className = ("match");
        errorMessage.style.display = ('none');
        }
    }
    else
    {
        password.className = ("error");
        passwordConfirm.className = ("error");
        errorMessage.style.display = ('inline');
    }
}