/* ── Winvest i18n ── */
(function () {
  'use strict';

  var LANG_KEY = 'winvest-lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'fi';

  /* ── Translations ── */
  var t = {
    /* NAV */
    'nav.home': { fi: 'Etusivu', en: 'Home' },
    'nav.boards': { fi: 'Hallitukset', en: 'Boards' },
    'nav.gallery': { fi: 'Kuvapankki', en: 'Gallery' },
    'nav.investing': { fi: 'Sijoittamisen aloittaminen', en: 'Start Investing' },
    'nav.jobs': { fi: 'Avoimet työpaikat', en: 'Open Positions' },
    'nav.partners': { fi: 'Kumppanit', en: 'Partners' },
    'nav.events': { fi: 'Tapahtumat', en: 'Events' },
    'nav.exams': { fi: 'Opinnot', en: 'Studies' },

    /* COOKIE BANNER */
    'cookie.text': { fi: 'Käytämme evästeitä sivuston analytiikkaan ja käyttökokemuksen parantamiseen.', en: 'We use cookies for site analytics and to improve your experience.' },
    'cookie.accept': { fi: 'Hyväksy', en: 'Accept' },
    'cookie.decline': { fi: 'Hylkää', en: 'Decline' },

    /* FOOTER */
    'footer.copy': { fi: '© 2025 Winvest — Yliopiston Sijoituskerho', en: '© 2025 Winvest — University Investment Club' },

    /* ── INDEX ── */
    'hero.eyebrow': { fi: 'Yliopiston Sijoituskerho', en: 'University Investment Club' },
    'hero.sub': { fi: 'Winvest on yliopiston johtava sijoituskerho, joka yhdistää sijoittamisesta kiinnostuneet opiskelijat ja tarjoaa käytännön osaamista rahoitusmaailmaan.', en: 'Winvest is the leading university investment club, connecting students interested in investing and providing hands-on expertise in the world of finance.' },
    'hero.btn': { fi: 'Tutustu kerhoihin', en: 'Explore the Club' },
    'stat.founded': { fi: 'Perustettu', en: 'Founded' },
    'stat.members': { fi: 'Jäsentä', en: 'Members' },
    'stat.years': { fi: 'Vuotta toiminnassa', en: 'Years Active' },
    'about.eyebrow': { fi: 'Meistä', en: 'About Us' },
    'about.title': { fi: 'Sijoittamisen <em>yhteisö</em>', en: 'Investment <em>Community</em>' },
    'about.p1': { fi: 'Winvest on yliopiston opiskelijoiden perustama sijoituskerho, jonka tavoitteena on edistää taloudellista lukutaitoa ja sijoittamisosaamista opiskelijoiden keskuudessa.', en: 'Winvest is a student-founded investment club whose mission is to promote financial literacy and investing skills among university students.' },
    'about.p2': { fi: 'Järjestämme excursioita johtaviin finanssialan yrityksiin, luentoja asiantuntijoilta sekä kerhon sisäisiä sijoituskilpailuja. Kerho on avoin kaikille opiskelijoille taustasta riippumatta.', en: 'We organize excursions to leading financial firms, lectures from industry experts, and internal investment competitions. The club is open to all students regardless of their background.' },
    'about.btn': { fi: 'Hallitukset →', en: 'Board Members →' },

    /* ── PRESS ── */
    'press.eyebrow': { fi: 'Mediassa', en: 'In the Press' },
    'press.title': { fi: 'Winvest <em>uutisissa</em>', en: 'Winvest in the <em>News</em>' },
    'press.kl.title': { fi: 'Opiskelijat vierailivat suomalaisessa hedge-rahastossa — "Olipa vaikuttavaa"', en: 'Students visited a Finnish hedge fund — "It was impressive"' },
    'press.kl.desc': { fi: 'Kauppalehti haastatteli Winvestin ja AaltoES Investment Clubin puheenjohtajia heidän excursionsa jälkeen Estlander & Partnersilla.', en: 'Kauppalehti interviewed the presidents of Winvest and AaltoES Investment Club after their excursion to Estlander & Partners.' },
    'press.kl.read': { fi: 'Lue artikkeli →', en: 'Read article →' },

    /* ── HALLITUKSET ── */
    'board.title': { fi: 'Hallitukset', en: 'Board Members' },
    'board.yearTitle': { fi: 'Hallitus', en: 'Board' },
    'role.pj': { fi: 'Puheenjohtaja', en: 'President' },
    'role.vpj': { fi: 'Varapuheenjohtaja', en: 'Vice President' },
    'role.rahastonhoitaja': { fi: 'Rahastonhoitaja', en: 'Treasurer' },
    'role.sihteeri': { fi: 'Sihteeri', en: 'Secretary' },
    'role.tapahtumavastaava': { fi: 'Tapahtumavastaava', en: 'Event Coordinator' },
    'role.viestintavastaava': { fi: 'Viestintävastaava', en: 'Communications' },
    'role.jasen': { fi: 'Hallituksen jäsen', en: 'Board Member' },
    'role.it': { fi: 'IT-vastaava', en: 'IT Manager' },
    'role.yrityss': { fi: 'Yrityssuhdevastaava', en: 'Corporate Relations' },
    'role.excursio': { fi: 'Excursiovastaava', en: 'Excursion Coordinator' },

    /* ── KUVAPANKKI ── */
    'gallery.title': { fi: 'Kuvapankki', en: 'Gallery' },
    'gallery.subtitle': { fi: 'Tapahtumat & muistot', en: 'Events & Memories' },
    'gallery.all': { fi: 'Kaikki', en: 'All' },
    'gallery.excursions': { fi: 'Excursiot', en: 'Excursions' },
    'gallery.galas': { fi: 'Gaalat', en: 'Galas' },
    'gallery.board': { fi: 'Hallitus', en: 'Board' },
    'gallery.events': { fi: 'Tapahtumat', en: 'Events' },

    /* ── SIJOITTAMINEN ── */
    'sij.title': { fi: 'Sijoittamisen aloittaminen', en: 'Getting Started with Investing' },
    'sij.subtitle': { fi: 'Opas sijoittamisen maailmaan', en: 'A Guide to the World of Investing' },
    'sij.intro': { fi: 'Sijoittaminen voi tuntua aluksi monimutkaiselta, mutta oikeilla perusteilla pääset hyvin alkuun. Tällä sivulla esittelemme tärkeimmät käsitteet ja ensimmäiset askeleet sijoitusmaailmaan.', en: 'Investing may feel complicated at first, but with the right basics you can get started. On this page we introduce the key concepts and first steps into the world of investing.' },
    'sij.why': { fi: 'Miksi sijoittaa?', en: 'Why Invest?' },
    'sij.why.text': { fi: 'Sijoittaminen on tapa kasvattaa varallisuutta pitkällä aikavälillä. Korkoa korolle -efekti tekee säännöllisestä sijoittamisesta erittäin tehokasta — mitä aikaisemmin aloitat, sitä parempi.', en: 'Investing is a way to grow wealth over the long term. The compound interest effect makes regular investing extremely effective — the earlier you start, the better.' },
    'sij.account': { fi: 'Arvo-osuustili', en: 'Brokerage Account' },
    'sij.account.text': { fi: 'Sijoittaminen alkaa arvo-osuustilin avaamisella. Suosittuja palveluntarjoajia Suomessa ovat Nordnet, Degiro ja pankit. Vertaile kuluja ennen valintaa.', en: 'Start by opening a brokerage account. Popular providers in Finland include Nordnet, Degiro, and banks. Compare fees before choosing.' },
    'sij.stocks': { fi: 'Osakkeet', en: 'Stocks' },
    'sij.stocks.text': { fi: 'Osakkeella omistat osan yrityksestä. Osakkeiden arvo voi nousta tai laskea, ja yritys voi maksaa osinkoja. Hajauttaminen useisiin osakkeisiin pienentää riskiä.', en: 'By owning a stock, you own a piece of a company. Stock values can rise or fall, and companies may pay dividends. Diversifying across multiple stocks reduces risk.' },
    'sij.index': { fi: 'Indeksirahastot', en: 'Index Funds' },
    'sij.index.text': { fi: 'Indeksirahasto seuraa esimerkiksi S&P 500 tai MSCI World -indeksiä. Ne tarjoavat laajan hajautuksen pienillä kuluilla ja soveltuvat erityisen hyvin aloittelijoille.', en: 'An index fund tracks indices like the S&P 500 or MSCI World. They offer broad diversification at low cost and are especially suitable for beginners.' },
    'sij.diversify': { fi: 'Hajauttaminen', en: 'Diversification' },
    'sij.diversify.text': { fi: 'Älä laita kaikkia munia samaan koriin. Hajauta sijoituksesi eri toimialoille, maihin ja omaisuusluokkiin. Tämä pienentää yksittäisen sijoituksen riskiä merkittävästi.', en: "Don't put all your eggs in one basket. Diversify your investments across industries, countries, and asset classes. This significantly reduces the risk of any single investment." },
    'sij.longterm': { fi: 'Pitkä aikaväli', en: 'Long Term' },
    'sij.longterm.text': { fi: 'Sijoittaminen kannattaa nähdä pitkän aikavälin toimintana. Markkinat heiluvat lyhyellä aikavälillä, mutta historiallisesti ne ovat aina toipuneet ja kasvaneet pitkällä aikavälillä.', en: 'Investing should be viewed as a long-term activity. Markets fluctuate in the short term, but historically they have always recovered and grown over time.' },
    'sij.cta': { fi: 'Haluatko oppia lisää? Liity Winvestiin!', en: 'Want to learn more? Join Winvest!' },
    'sij.cta.btn': { fi: 'Tutustu kerhoihin', en: 'Explore the Club' },
    'sij.books': { fi: 'Kirjat — Aloita tästä', en: 'Books — Start Here' },
    'sij.book1': { fi: 'Miten sijoitan pörssiosakkeisiin — Seppo Saario', en: 'Miten sijoitan pörssiosakkeisiin — Seppo Saario' },
    'sij.book1.desc': { fi: 'Suomalainen klassikko osakesijoittamisesta. Paras lähtökohta aloittelijalle — selkeä ja käytännönläheinen.', en: 'A Finnish classic on stock investing. Best starting point for beginners — clear and practical.' },
    'sij.book2': { fi: 'Miten miljoona hankitaan ja kulutetaan — Vesa Puttonen', en: 'Miten miljoona hankitaan ja kulutetaan — Vesa Puttonen' },
    'sij.book2.desc': { fi: 'Opettaa varallisuuden rakentamisen ja järkevän kuluttamisen periaatteet suomalaisesta näkökulmasta.', en: 'Teaches the principles of wealth building and smart spending from a Finnish perspective.' },
    'sij.book3.desc': { fi: 'Perustelee indeksirahastosijoittamisen ylivoimaisuuden selkeästi ja vakuuttavasti.', en: 'Clearly and convincingly argues the superiority of index fund investing.' },

    /* ── TYÖPAIKAT ── */
    'jobs.title': { fi: 'Avoimet työpaikat', en: 'Open Positions' },
    'jobs.subtitle': { fi: 'Mahdollisuudet rahoitusalalla', en: 'Opportunities in Finance' },
    'jobs.intro': { fi: 'Winvest kerää jäsenilleen avoimia harjoittelu- ja työpaikkoja rahoitus- ja sijoitusalalta. Alta löydät tämänhetkiset avoimet paikat.', en: 'Winvest curates internship and job openings in the finance and investment sector for its members. Below you\'ll find the current open positions.' },
    'jobs.empty': { fi: 'Ei avoimia paikkoja tällä hetkellä', en: 'No open positions at this time' },
    'jobs.empty.sub': { fi: 'Seuraa somekanaviamme — ilmoitamme uusista paikoista siellä ensimmäisenä', en: 'Follow our social media — we announce new positions there first' },
    'jobs.ecb.desc': { fi: 'EKP:n Market Operations -osastolla pääset tutustumaan rahapoliittisten operaatioiden toteutukseen, rahoitusvakauden seurantaan ja markkinainfrastruktuuriin Euroopan keskuspankissa.', en: 'At the ECB\'s Market Operations division, you will gain exposure to the implementation of monetary policy operations, financial stability monitoring, and market infrastructure at the European Central Bank.' },
    'jobs.apply': { fi: 'Hae paikkaa →', en: 'Apply →' },

    /* ── KUMPPANIT ── */
    'partners.title': { fi: 'Kumppanit', en: 'Partners' },
    'partners.subtitle': { fi: 'Yhteistyössä alan johtavien toimijoiden kanssa', en: 'In collaboration with leading industry players' },
    'partners.eyebrow': { fi: 'Yhteistyö', en: 'Collaboration' },
    'partners.heading': { fi: 'Meidän <em>kumppanit</em>', en: 'Our <em>Partners</em>' },
    'partners.intro': { fi: 'Winvest tekee yhteistyötä finanssialan yritysten ja organisaatioiden kanssa tarjotakseen jäsenilleen ainutlaatuisia mahdollisuuksia verkostoitumiseen, oppimiseen ja urakehitykseen.', en: 'Winvest collaborates with financial sector companies and organizations to offer its members unique opportunities for networking, learning, and career development.' },
    'partners.placeholder': { fi: 'Kumppani', en: 'Partner' },
    'partners.name': { fi: 'Kumppanin nimi', en: 'Partner Name' },
    'partners.desc': { fi: 'Kuvaus yhteistyöstä lisätään myöhemmin.', en: 'Partnership description will be added later.' },
    'partners.cta': { fi: 'Haluatko yrityksesi Winvestin kumppaniksi?', en: 'Want your company to partner with Winvest?' },
    'partners.btn': { fi: 'Ota yhteyttä →', en: 'Contact Us →' },

    /* ── TAPAHTUMAT ── */
    'events.title': { fi: 'Tapahtumat', en: 'Events' },
    'events.subtitle': { fi: 'Winvestin tulevat ja menneet tapahtumat', en: 'Upcoming and past Winvest events' },
    'events.intro': { fi: 'Winvest järjestää monipuolisia tapahtumia jäsenilleen — excursioista yritysvierailuihin, sijoitusiltamista vuosijuhliin. Täältä löydät tulevat tapahtumat sekä katsauksen menneisiin.', en: 'Winvest organizes a wide range of events for its members — from excursions and corporate visits to investment evenings and annual galas. Here you can find upcoming events and a look back at past ones.' },
    'events.upcoming': { fi: 'Tulevat tapahtumat', en: 'Upcoming Events' },
    'events.past': { fi: 'Menneet tapahtumat', en: 'Past Events' },
    'events.inFinnish': { fi: '', en: 'In Finnish' },

    /* Stock & Shots */
    'event.stockshots.p1': { fi: 'Tule kuulemaan Suomen Osakesäästäjien toimitusjohtajan ajankohtainen katsaus osakemarkkinoihin! Illan aikana pureudutaan markkinoiden kuumimpiin puheenaiheisiin rennossa tunnelmassa — ja hintaan kuuluu alkoholitarjoilu. Tämä on tilaisuus, jota et halua missata.', en: 'Join us for an up-to-date market overview by the CEO of the Finnish Shareholders\' Association! The evening dives into the hottest market topics in a relaxed atmosphere — and drinks are included. This is an event you don\'t want to miss.' },
    'event.stockshots.p2': { fi: 'Liity seuraamme ja verkostoidu samanhenkisten sijoittajien kanssa lasillisen äärellä!', en: 'Join us and network with like-minded investors over drinks!' },

    /* Excursio Helsinki (upcoming) */
    'event.excu.hki.mandatum': { fi: 'Mandatumilla käsitellään markkinanäkymiä sekä sijoitustuotteita (strukturoidut, korko ja vaihtoehtoiset sijoitukset).', en: 'At Mandatum, we will discuss market outlook and investment products (structured, fixed income, and alternative investments).' },
    'event.excu.hki.danske': { fi: 'Danske Bankilla tutustumme pankin Markets-toimintoihin, kuten Trade Financeen, Foreign Exchangeen, Equity Researchiin, Debt Capital Marketsiin sekä Corporate Lendingiin. Ohjelmaan kuuluu myös Markets-vierailu ja alumni-uratarinoita.', en: 'At Danske Bank, we explore the bank\'s Markets operations including Trade Finance, Foreign Exchange, Equity Research, Debt Capital Markets, and Corporate Lending. The program includes a Markets visit and alumni career stories.' },

    /* Naistenpäivä */
    'event.naisten25.p': { fi: 'Naistenpäivän tapahtumassa puhujina olivat Laura Rahikka Hycamitelta ja Tuuli Prinkkilä Fintosista. He jakoivat ajatuksiaan yrittäjyydestä ja kertoivat omista urapoluistaan.', en: "At the International Women's Day event, Laura Rahikka from Hycamite and Tuuli Prinkkilä from Fintos spoke about entrepreneurship and shared their career journeys." },

    /* Excursio Evli & Nordea */
    'event.evli': { fi: 'Evlillä syvennyttiin varainhoidon ja pääomamarkkinoiden maailmaan.', en: 'At Evli, we explored the world of asset management and capital markets.' },
    'event.nordea': { fi: 'Nordealla kuultiin pankkitoiminnasta ja talouden tulevaisuuden näkymistä. Päivä huipentui verkostoitumiseen illallisen merkeissä.', en: 'At Nordea, we heard about banking and future economic outlooks. The day concluded with networking over dinner.' },

    /* Sijoittaja 2025 */
    'event.sijoittaja25': { fi: 'Warrantti Invest suuntasi Sijoittaja 2025 -messuille Helsingin Messukeskukseen tutustumaan sijoittamisen teemoihin, trendeihin ja ajankohtaiseen sisältöön. Tapahtuman virallinen Afterwork järjestettiin Cafe Solossa.', en: 'Warrantti Invest attended the Investor 2025 Fair at Helsinki Exhibition Centre to explore investing themes, trends, and current topics. The official afterwork was held at Cafe Solo.' },

    /* Institutional Trading */
    'event.institutional': { fi: 'Winvestin entinen puheenjohtaja Kare Laine saapuu Vaasaan kertomaan meille työstään Nordea Marketsilla. Kare on työskennellyt osakeoptioiden markkinatakauksessa (Equity Derivatives Trading) sekä valuuttadeskillä (FX Sales). Tapahtumassa on kahvitarjoilut.', en: 'Former Winvest president Kare Laine visits Vaasa to tell us about his work at Nordea Markets. Kare has worked in equity derivatives trading (market making) and FX Sales. Coffee will be served.' },

    /* Finance as a Career */
    'event.fincareer': { fi: 'Alumnitapahtuma, jossa vieraana Nordean, BDO:n ja EY:n edustajat. He jakoivat urapolkujaan, kertoivat tyypillisestä työpäivästään ja antoivat vinkkejä opintoihin sekä työnhakuun. Tapahtuman tavoitteena oli auttaa opiskelijoita hahmottamaan, millaisia urapolkuja ja työmahdollisuuksia on tarjolla laskentatoimen ja rahoituksen aloilla.', en: 'An alumni event featuring representatives from Nordea, BDO, and EY. They shared their career paths, described a typical work day, and gave tips on studies and job applications. The event aimed to help students understand the career paths and job opportunities available in accounting and finance.' },

    /* Excursio Helsinki 17-18.4 */
    'event.excu.hki.apr': { fi: 'Kahden päivän excursiolla Helsinkiin pääsimme tutustumaan United Bankersiin, Danske Bankkiin sekä CapManiin. Luvassa oli myös illanviettoa porukalla, joten tekemistä riitti koko excun ajaksi!', en: 'On a two-day excursion to Helsinki, we visited United Bankers, Danske Bank, and CapMan. There was also an evening out together, so there was plenty to do the entire trip!' },

    /* Syksyn Excursio */
    'event.aktia': { fi: 'Aktialla kuulimme pääekonomistin ajankohtaisen katsauksen talouteen.', en: "At Aktia, we heard the chief economist's current outlook on the economy." },
    'event.sp': { fi: 'Suomen Pankissa tutustuimme kultavarantoihin ja pankin toimintaan osana eurojärjestelmää. Päivä huipentui verkostoitumiseen illallisen merkeissä.', en: 'At the Bank of Finland, we explored gold reserves and the bank\'s role in the Eurosystem. The day concluded with networking over dinner.' },

    /* Naistenpäivä 2024 */
    'event.naisten24': { fi: 'Naistenpäivää juhlittiin yhdessä VES:in ja Bloom by Johannan kanssa! Tapahtuman puhujina olivat kauneusalan verkkokauppa Bloom by Johannan perustanut Johanna Tähtinen sekä naisyrittäjyyttä paljon tutkinut Sami Vähämaa. Illan ohjelmaan kuului myös tarjoiluja, musiikkia ja yhteistä hengailua naistenpäivän kunniaksi.', en: "International Women's Day was celebrated together with VES and Bloom by Johanna! Speakers included Johanna Tähtinen, founder of beauty e-commerce Bloom by Johanna, and Sami Vähämaa, a researcher on female entrepreneurship. The evening also featured refreshments, music, and socializing." },

    /* Coinmotion */
    'event.coinmotion': { fi: 'Teemailta kryptovaluutoista Coinmotionin Partner Manager Pessi Peuran kanssa. Coinmotion on Pohjoismaiden johtava kryptovaluuttojen palveluntarjoaja, joka keskittyy kryptovaluuttojen vaihtoon, säilytykseen ja varainhoitoon. Yrityksellä on yli 120 000 asiakasta, ja se on perustettu vuonna 2012.', en: 'A themed evening on cryptocurrencies with Coinmotion Partner Manager Pessi Peura. Coinmotion is the leading Nordic cryptocurrency service provider, focusing on crypto exchange, custody, and asset management. The company has over 120,000 customers and was founded in 2012.' },

    /* Asuntosijoittaminen */
    'event.asunto': { fi: 'Teemailta asuntosijoittamisesta alumnimme, Suomen vuokranantajat ry:n ekonomistin Eemeli Karlssonin johdattelemana. Eemeli kertoi asuntosijoittamisesta ja asuntomarkkinoista sekä uramahdollisuuksista valmistumisen jälkeen.', en: 'A themed evening on real estate investing led by our alumnus Eemeli Karlsson, economist at the Finnish Landlords Association. Eemeli shared insights on real estate investing, the housing market, and career opportunities after graduation.' },

    /* ── TENTTIPANKKI ── */
    'tentti.title': { fi: 'Tenttipankki', en: 'Exam Archive' },
    'tentti.subtitle': { fi: 'Vanhat tentit ja opiskelumateriaalit', en: 'Past Exams & Study Materials' },
    'tentti.intro': { fi: 'Tervetuloa Winvestin tenttipankkiin! Täältä löydät vanhoja tenttejä, malleja harkkatöihin ja opiskelumateriaalia kauppatieteiden opintoihin. Materiaalit on jaoteltu kursseittain.', en: 'Welcome to the Winvest exam archive! Here you can find past exams, assignment templates, and study materials for business studies. Materials are organized by course.' },
    'tentti.accounting': { fi: 'Laskentatoimi', en: 'Accounting' },
    'tentti.finance': { fi: 'Rahoitus', en: 'Finance' },
    'tentti.economics': { fi: 'Taloustiede', en: 'Economics' },
    'tentti.coming': { fi: 'Kursseja ja tenttejä lisätään pian', en: 'Courses and exams will be added soon' },
    'tentti.cta': { fi: 'Haluatko jakaa omia tenttejäsi? Ota yhteyttä hallitukseen tai lähetä materiaalit Telegram-ryhmässä!', en: 'Want to share your own exams? Contact the board or send materials in the Telegram group!' }
  };

  /* ── Apply translations ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] && t[key][lang] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key][lang];
        } else {
          el.innerHTML = t[key][lang];
        }
      }
    });

    /* Show/hide "In Finnish" badges */
    document.querySelectorAll('.lang-badge-fi').forEach(function (el) {
      el.style.display = lang === 'en' ? 'inline-block' : 'none';
    });

    /* Update toggle button */
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'fi' ? 'EN' : 'FI';
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Inject toggle button into nav */
    var nav = document.querySelector('nav');
    if (nav) {
      var btn = document.createElement('button');
      btn.id = 'lang-toggle';
      btn.className = 'lang-toggle';
      btn.textContent = currentLang === 'fi' ? 'EN' : 'FI';
      btn.addEventListener('click', function () {
        applyLang(currentLang === 'fi' ? 'en' : 'fi');
      });
      nav.appendChild(btn);
    }

    /* Apply saved language */
    if (currentLang !== 'fi') {
      applyLang(currentLang);
    }
  });

  /* Expose for external use */
  window.winvestI18n = { applyLang: applyLang, translations: t };
})();
