// Login JavaScript
// Username is "a.admin"
// Password is "secure-password"

// Global Variables
let report = document.getElementById('log-indicator')

// Event Listener (Button Press)
document.getElementById('button').addEventListener('click', loginCheck);

// Event Function
function loginCheck() {

    // Variables
    let usern = document.getElementById('usern');
    let passw = document.getElementById('passw');

    // Remove Previous Login Attempt Styles
    usern.classList.remove('wrong-box');
    passw.classList.remove('wrong-box');
    report.innerHTML = ''

    // Check if fields are correct
    let usernBool = 'a.admin' == usern.value;
    let passwBool = 'secure-password' == passw.value;

    if (usernBool && passwBool) {
        // Sign In Successful
        report.innerHTML = 'Sign In Successful';
        report.style.color = 'green';
    } else if (!(usernBool) && !(passwBool)) {
        // Both Fields Incorrect
        usern.classList.add('wrong-box');
        passw.classList.add('wrong-box');
        report.innerHTML = 'Sign in Unsuccessful, Both Fields Incorrect';
        report.style.color = 'red';
    } else if (passwBool) {
        // Username Incorrect
        usern.classList.add('wrong-box');
        report.innerHTML = 'Sign in Unsuccessful, Username Incorrect';
        report.style.color = 'red';
    } else {
        // Only Remaining Option is Password Incorrect
        passw.classList.add('wrong-box');
        report.innerHTML = 'Sign in Unsuccessful, Password Incorrect';
        report.style.color = 'red';
    }
}