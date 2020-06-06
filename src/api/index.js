
const LINKS = {
  euroRates: 'https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json',
};

const api = {
  euroRates() {
    return new Promise ((resolve, reject) => {
      try {
        const apiAnswer = fetch(LINKS.euroRates);
        const apiAnswerJson = apiAnswer.api();
        console.log('api.euroRates apiAnswerJson: ', apiAnswerJson);
        console.log('api.euroRates apiAnswerJson.rate[0].bid: ', apiAnswerJson.rate[0].bid);
        console.log('api.euroRates apiAnswerJson.rate[0].ask: ', apiAnswerJson.rate[0].ask);
        resolve({
          buyRate: apiAnswerJson.rate[0].bid,
          sellRate: apiAnswerJson.rate[0].ask,
        });
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })
    // buyRate: LINKS.euroRates + ' coś 4.30',
    // sellRate: LINKS.euroRates + ' coś 4.50',
  },
};


export default api;


// const getPlanet = async (id) => {
//   try {
//     const result = await fetch(`https://swapi.co/api/planets/${id}/`);
//     const planet = await result.json();
//     console.log(planet);
//   } catch (err) {
//     console.log(err);
//   }
// };


// const api = {
//   fetchQuote() {
//     return new Promise((resolve, reject) => {
//
//       const wait = Math.floor(Math.random() * 3) + 3;
//
//       setTimeout(() => {
//         const index = Math.floor(Math.random() * 20);
//         console.log(index);
//         console.log(quotes[index]);
//         resolve(quotes[index]);
//       }, wait * 200)
//     });
//   }
// };
