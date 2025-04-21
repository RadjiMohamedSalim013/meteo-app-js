# Application Météo

## Description

Cette application permet de récupérer et d'afficher les données météo en temps réel d'une ville donnée. Elle utilise l'API de [OpenWeatherMap](https://openweathermap.org/) pour obtenir les informations météorologiques.

## Prérequis

Avant de pouvoir tester l'application, vous devrez obtenir une clé API gratuite de OpenWeatherMap pour pouvoir effectuer les requêtes météorologiques.

## Installation

1. Clonez ce projet sur votre machine locale :

   ```bash
   git clone https://github.com/RadjiMohamedSalim013/meteo-app-js.git
   ```

2. Ouvrez le dossier du projet dans votre éditeur de texte préféré.

3. Créez un compte sur [OpenWeatherMap](https://openweathermap.org/), si vous n'en avez pas encore, puis récupérez votre **clé API** (elle est gratuite).

## Configuration

1. Ouvrez le fichier `script.js` dans votre éditeur de texte.

2. Remplacez `ta_clé_API` dans cette ligne :

   ```js
   const apiKey = "ta_clé_API"; // ⚠️ Remplacez par votre propre clé API
   ```

   Par votre **clé API** personnelle obtenue sur [OpenWeatherMap](https://openweathermap.org/).

3. Enregistrez vos modifications.

## Test de l'application

1. Ouvrez le fichier `index.html` dans votre navigateur préféré.

2. Entrez le nom d'une ville dans le champ de recherche.

3. Cliquez sur le bouton **Rechercher** pour voir les informations météorologiques s'afficher, telles que la température et la description.

4. Si vous entrez une ville invalide, un message d'erreur s'affichera pour vous informer que la ville n'a pas été trouvée.

## Aide

Si vous avez des questions ou des problèmes avec l'installation, n'hésitez pas à ouvrir une issue sur GitHub !

