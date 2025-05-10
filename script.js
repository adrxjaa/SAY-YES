const messages = [
    "omg no",
    "think again",
    "nah like why not???",
    "please pookie",
    "omg fam",
    "ill be sad ",
    "i will be very sad",
    "i will be very very sad",
    "POOKIEEE OMGG",
    "SAY YES NOW"
];

let messageIndex = 0;

function handleno() {
    const yesbutt = document.querySelector('.yes');
    const nobutt = document.querySelector('.no');

    nobutt.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesbutt).fontSize);
    yesbutt.style.fontSize = `${currentSize * 1.5}px`;
}

function handlesyes() {
    window.location.href = "yespage.html"; // Ensure yespage.html exists
}
