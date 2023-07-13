document.addEventListener('DOMContentLoaded', () => {
    
  // Haetaan <p> -elementti
  const tekijanNimiElementti = document.getElementById('tekijan-nimi');

  // Määritellään tekijän nimi
  const tekijanNimi = 'Arthur';

  // Asetetaan tekijän nimi (Arthur) <p> -elementtiin
  tekijanNimiElementti.textContent = `Tekijä: ${tekijanNimi}`;
});