function onClickSearchButton() {
    console.log('Olá')
}

window.onload = () => {
  document.querySelector('#search-input')
    .addEventListener('click', onClickSearchButton);
};

