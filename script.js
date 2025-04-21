const boutonRecherche = document.getElementById("btn-recherche");
const champVille = document.getElementById("ville");
const resultatMeteo = document.getElementById("resultat-meteo");
const nomVille = document.getElementById("nom-ville");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");


boutonRecherche.addEventListener("click", () => {
    const ville = champVille.value.trim();
    if (ville !== "") {
      chercherMeteo(ville);
    }
  });
  
  const chercherMeteo = (ville) => {
    const apiKey = ""; // Remplacez par votre propre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Ville non trouvée");
        }
        return response.json();
      })
      .then(data => {
        afficherMeteo(data);
      })
      .catch(error => {
        resultatMeteo.classList.remove("cacher");
        nomVille.textContent = "Erreur : ville introuvable";
        temperature.textContent = "";
        description.textContent = "";
      });
  }
  


  const afficherMeteo = (data) => {
    resultatMeteo.classList.remove("cacher");
    nomVille.textContent = data.name;
    temperature.textContent = data.main.temp;
    description.textContent = data.weather[0].description;
  }
  