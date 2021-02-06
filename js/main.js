const cookieConsent  = document.getElementById('cookieConsent');
const cookieConsentBtn = document.getElementById('cookieBtn');

const elMenu = document.getElementById('mainMenu');
const menuBtn = document.getElementById('menuBtn');

const consentDataBrowser = localStorage.getItem('cookieBannerDisplayed');

menuBtn.addEventListener('click', toggleClass);
cookieConsentBtn.addEventListener('click', handleClick, {once: true});

function toggleClass(){
    elMenu.classList.toggle('show');
}

function handleClick () {
    cookieConsent.classList.add('active');
    localStorage.setItem("cookieBannerDisplayed", "true");
}

/* If the user agreed to the consent policy by clicking 'einverstanden' when he/she visited the website first time, 
   we save the user decision in the local storage of the user's browser. 
   Hence, we do not display the consent on return of the user to the homepage. */
(function () {
    if (consentDataBrowser) {
        cookieConsent.classList.add('active');
    }
  })();
