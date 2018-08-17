import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Choose your cocktail", "THE cocktail"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
