 // function to convert voice into text
 function listen() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        console.log(event);
        document.getElementById("txtBox").value = event.results[0][0].transcript;
    }

    recognition.start();
}

// function to copy text to clipboard
function copyText() {
    const text = document.getElementById("txtBox");
    // modern method
    navigator.clipboard.writeText(text.value);

    // depricated code --- no longer recommended to copy clipboard

    // text.select();
    // text.setSelectionRange(0, 99999); // For mobile devices
    // document.execCommand("copy");

}