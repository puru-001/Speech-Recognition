window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.interimResults = true;

let template = document.getElementById('template');
let p = document.createElement('p')
template.appendChild(p);

recognition.addEventListener('results', (e) => {
    // let transcript = Array.from(e.results[0])
    // console.log(transcript);
    let transcript = [...e.results].map(result => result[0])
    .map(result => result.transcript).join("")
   // console.log(transcript);
     if(e.results[0].isFinal){
        p = document.createElement('p');
        template = document.getElementById('template');
        template.appendChild(p).innerHTML = transcript;
    }
});

recognition.addEventListener('end',recognition.start)
recognition.start();