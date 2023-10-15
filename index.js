const cardTemplate = function (nameAndFlag) {
  return `<div class="card">
              <img id="flag-image" src="${nameAndFlag.flags.png}" alt="flag" />
              <h1 class="center">${nameAndFlag.name.official}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then(countries => {
    for (let i = 0; i < countries.length; i++) {
      let printCard = cardTemplate(countries[i])
      countriesNode.innerHTML += printCard
    }
  })

  