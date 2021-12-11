fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
    const countryDiv = document.createElement('div');
    countryDiv.className="country";
    const countryInfo = `
    <img src=${country.flags.png} alt="${country.name.common}" height="100" width="200"><br>
         <h3 class="country-name">${country.name.common}</h3>
         <p class="capital">${country.capital}</p>
         `
    countryDiv.innerHTML = countryInfo;
    
    countriesDiv.appendChild(countryDiv);
   }); 
}
