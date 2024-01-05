const api = "https://restcountries.com/v3.1/region/africa";
document.getElementById("pays").innerHTML = "";

function listePays() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return affichage(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
const button = document.querySelector("button");
button.addEventListener('click',listePays)

function affichage(countries) {
  const lst = document.getElementById("pays");

  countries.forEach((country) => {
    const cartes = document.createElement("div");
    cartes.className = "cartes";

    const nomPays = document.createElement("h3");
    nomPays.textContent = country.name.common;

    const drapeau = document.createElement("img");
    drapeau.src = country.flags.svg;
    drapeau.alt = "Drapeau";

    cartes.appendChild(nomPays);
    cartes.appendChild(drapeau);

    lst.appendChild(cartes);
  });
}
