const labels = document.querySelectorAll('.input-box label');

labels.forEach(label => {
    console.log(label)/*v Get text, split to empty('')array, map letters by index */
    label.innerHTML = label.innerText.split('').map((letter, index) => 
        `<span style="transition-delay:${index*50}ms">${letter}</span>`) /* Palauttaa jokaisen kirjaimen erikseen 'jaksoina'(span) */
        .join('') /* Palauttaa kirjain jakson takaisin taulukoksi(array) */
})

/* Selaimessa: Hiiren oikea, inspect, (Pick element) label >> span */
/* CSS animaatio >> .input-box input:focus + label span, .input-box input:valid + label span */