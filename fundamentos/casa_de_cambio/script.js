function renderRate(currency) {
    const currencyList = document.querySelector('#currency-list');
    const li = document.createElement('li');
    li.innerHTML = `${currency.code}: ${currency.rate}`;
    currencyList.appendChild(li);
}

function updateBaseCurrency(baseCurrencyCode) {
  document.querySelector('#currency-base')
    .innerHTML = `Valores Referentes a 1 USD ${baseCurrencyCode}`
}

async function getRateFromBaseCurrency(baseCurrencyCode) {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrencyCode}`);
  const json = await response.json();
  console.log(json);
}



function onClickSearchButton() {
    // renderRate({
    // code: 'USD',
    // rate: 5.999,
    // });
    // updateBaseCurrency('BRL');

    console.log(getRateFromBaseCurrency);
}

window.onload = () => {
  document.querySelector('#search-button')
    .addEventListener('click', onClickSearchButton);
};


