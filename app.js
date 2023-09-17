function changeInputStyle() {
    let inputElement = document.getElementById('input-box');
    let errorMessage = document.getElementById('error-message');

    inputElement.style.backgroundColor = "#ffcccb";
    inputElement.style.border = '1px solid red';

    errorMessage.textContent = 'Valid email required'
}

function checkEmail () {
    let userInput = document.getElementById('input-box').value;

    let hasAtSymbol = userInput.includes('@');
    let hasValidDomain = userInput.includes('.com') || userInput.includes('.net') || userInput.includes('.org');
    let paragraph = document.getElementById('paragraph');

    if (hasAtSymbol && hasValidDomain) {
        let message = `A confirmation email has been sent to ${userInput}. Please open it and click the button inside to confirm your subscription.`
        window.location.href = "verified.html";
        paragraph.textContent = message;
    } else {
        changeInputStyle();
        document.getElementById('input-box').value = '';
    }
}

function goToHomePage () {
    window.location.href = "index.html";
}