document.addEventListener("DOMContentLoaded", () => {
  const onkoKirjautunut = () => {
    if (localStorage.getItem("kirjautunut") === "kylla") { // Tarkistaa, onko kirjautunut 
     document.getElementById("tervetuloa_teksti").textContent += localStorage.getItem("nimi");
     document.getElementById("kirjautumis_lomake").style.display = "none"; // Piilottaa kirjautumislomakkeen
    }
    
  };

  onkoKirjautunut(); // Kutsuu onkoKirjautunut-funktiota

  const kirjaudu = () => {
  //  event.preventDefault(); // (Nyt toimi ilman tätä. Olin säheltänyt ylimääräisiä rivejä edelliseen versioon jostainsyystä)
    localStorage.setItem("nimi", document.getElementById("nimi").value); 
    localStorage.setItem("kirjautunut", "kyllä"); // Tallennetaan nimi localStorageen
  };

  document.getElementById("Kirjaudu_nappi").addEventListener("click", kirjaudu); // Lisätään klikkaustapahtumankuuntelija kirjaudu-funktiolle
  // Esimerkissä ei ollut tätä riviä, eikä tätä neuvottu. Ei toimi ilman tätä.
});

// (Tein nuolifunktioilla, koska se on uudempi tapa ja koitan totutella käyttämään sitä.)