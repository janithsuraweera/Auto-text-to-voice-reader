document.addEventListener("mouseup", function() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
        let speech = new SpeechSynthesisUtterance(selectedText);
    
        speech.lang="si-LK";
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
});
