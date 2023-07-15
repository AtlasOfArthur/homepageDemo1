document.addEventListener("DOMContentLoaded", () => {
  const onkoKirjautunut = () => {
    if (localStorage.getItem("kirjautunut") === "kylla") { // Tarkistaa, onko kirjautunut 
      document.getElementById("tervetuloa_teksti").textContent += localStorage.getItem("nimi");
      document.getElementById("kirjautumis_lomake").style.display = "none"; // Piilottaa kirjautumislomakkeen
      document.getElementById("logout_nappi").style.display = "block"; // Näyttää "Logout" näppäimen
    }else {
      document.getElementById("kirjautumis_lomake").style.display = "block"; // Näyttää kirjautumislomakkeen
      document.getElementById("logout_nappi").style.display = "none"; // Piilottaa "Logout" näppäimen
    }
  };

  onkoKirjautunut(); // Kutsuu onkoKirjautunut-funktiota

  const kirjaudu = () => { // Suluissa oli (event). Poistettu turhana.
    //  event.preventDefault(); // (Nyt toimi ilman tätä. Olin säheltänyt ylimääräisiä rivejä edelliseen versioon jostainsyystä)
    localStorage.setItem("nimi", document.getElementById("nimi").value); 
    localStorage.setItem("kirjautunut", "kylla"); // Tallennetaan nimi localStorageen
  };

  document.getElementById("Kirjaudu_nappi").addEventListener("click", kirjaudu); // Lisätään klikkaustapahtumankuuntelija kirjaudu-funktiolle
  // Esimerkissä ei ollut tätä riviä, eikä tätä neuvottu. Ei toimi ilman tätä.

  const kirjauduUlos = () => {
    localStorage.removeItem("kirjautunut"); // Poistaa kirjautumistiedon localStoragesta
    localStorage.removeItem("nimi"); // Poistaa nimen localStoragesta
    location.reload(); // Päivittää sivun
  };

  document.getElementById("logout_nappi").addEventListener("click", kirjauduUlos); // Lisätään klikkaustapahtumankuuntelija kirjauduUlos-funktiolle
});



