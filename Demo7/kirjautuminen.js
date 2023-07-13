document.addEventListener("DOMContentLoaded", () => {
  const onkoKirjautunut = () => {
    let kirjautunut = 'kyllä'; // Alustetaan muuttuja kirjautunut arvolla 'kyllä'
    if (kirjautunut === 'kyllä') { // Tarkistetaan, onko kirjautunut arvo 'kyllä'
      const nimi = localStorage.getItem("nimi"); // Haetaan tallennettu nimi localStoragesta
      if (nimi) { // Tarkistetaan, onko nimi olemassa
        document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + nimi; // Päivitetään tervetuloa-tekstin sisältö nimen kanssa
      }
    }
  };

  onkoKirjautunut(); // Kutsutaan onkoKirjautunut-funktiota

  const kirjaudu = (event) => {
    event.preventDefault(); // Estetään lomakkeen oletustoiminta (Ei toiminut ilman tätä)
    const nimiInput = document.getElementById("nimi"); // Haetaan input-elementti, jolla on id "nimi"
    const nimi = nimiInput.value; // Haetaan syötetty nimi input-kentästä
    localStorage.setItem("nimi", nimi); // Tallennetaan nimi localStorageen
    const tervetuloaTeksti = document.getElementById("tervetuloa_teksti"); // Haetaan elementti, jolla on id "tervetuloa_teksti"
    tervetuloaTeksti.textContent = "Tervetuloa " + nimi; // Päivitetään tervetuloa-tekstin sisältö nimen kanssa
  };

  document.getElementById("Kirjaudu_nappi").addEventListener("click", kirjaudu); // Lisätään klikkaustapahtumankuuntelija kirjaudu-funktiolle
});

// (Tein nuolifunktioilla, koska se on uudempi tapa ja koitan totutella käyttämään sitä.)