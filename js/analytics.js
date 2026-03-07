/* ── Winvest Cookie Consent + Vercel Analytics ── */
(function () {
  'use strict';

  var COOKIE_KEY = 'winvest-cookies';

  function loadAnalytics() {
    // Vercel Speed Insights
    var si = document.createElement('script');
    si.src = '/_vercel/insights/script.js';
    si.defer = true;
    document.head.appendChild(si);

    // Vercel Web Analytics (page views)
    var wa = document.createElement('script');
    wa.src = '/_vercel/speed-insights/script.js';
    wa.defer = true;
    document.head.appendChild(wa);
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('visible');
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('visible');
  }

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    hideBanner();
    loadAnalytics();
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    hideBanner();
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Inject cookie banner
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.innerHTML =
      '<div class="cookie-inner">' +
        '<p class="cookie-text" data-i18n="cookie.text">' +
          'Käytämme evästeitä sivuston analytiikkaan ja käyttökokemuksen parantamiseen.' +
        '</p>' +
        '<div class="cookie-buttons">' +
          '<button id="cookie-decline" class="cookie-btn cookie-btn-decline" data-i18n="cookie.decline">Hylkää</button>' +
          '<button id="cookie-accept" class="cookie-btn cookie-btn-accept" data-i18n="cookie.accept">Hyväksy</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', accept);
    document.getElementById('cookie-decline').addEventListener('click', decline);

    // Check stored preference
    var pref = localStorage.getItem(COOKIE_KEY);
    if (pref === 'accepted') {
      loadAnalytics();
    } else if (!pref) {
      showBanner();
    }

    // Re-translate banner if i18n is active and language is EN
    if (window.winvestI18n && localStorage.getItem('winvest-lang') === 'en') {
      window.winvestI18n.applyLang('en');
    }
  });
})();