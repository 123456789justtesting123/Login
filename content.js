function performLogin(username, password) {
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var submitButton = document.querySelector('input[type="submit"]');

    usernameInput.value = username;
    passwordInput.value = password;
    submitButton.click();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.username && request.password) {
        performLogin(request.username, request.password);
    }
});
