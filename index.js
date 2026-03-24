/**
 * index.js — Fort Jaipur Kitchen & Banquet · Social Links Page
 * Express server: serves static files + renders the HTML page
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/style.css', express.static(path.join(__dirname, 'style.css')));

// ── Links data ────────────────────────────────────────────────────────────────
const links = [
  {
    id: "zomato",
    label: "Order on Zomato",
    href: "https://www.zomato.com/jaipur/fort-jaipur-kitchen-and-banquet-tonk-road",
    icon: `<svg viewBox="0 13 34 7" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24" height="24">
    <path d="M20.386 16.8c0.011 0 0.023 0 0.035 0 0.231 0 0.456 0.026 0.672 0.077l-0.020-0.004-0.016 0.147c-0.068 0.581-0.495 1.046-1.051 1.17l-0.009 0.002c-0.038 0.008-0.082 0.013-0.127 0.013-0.306 0-0.562-0.211-0.632-0.495l-0.001-0.004c-0.004-0.027-0.006-0.059-0.006-0.091 0-0.16 0.056-0.307 0.15-0.423l-0.001 0.001c0.184-0.214 0.448-0.354 0.745-0.375l0.003-0c0.076-0.010 0.166-0.017 0.256-0.017h0.001zM28.754 15.478c0.317 0 0.509 0.285 0.509 0.876 0 0.858-0.345 1.563-0.781 1.563-0.327 0-0.519-0.295-0.519-0.877 0-0.867 0.355-1.562 0.791-1.562zM7.974 15.478c0.319 0 0.51 0.285 0.51 0.876 0 0.858-0.345 1.563-0.782 1.563-0.326 0-0.517-0.295-0.517-0.877 0-0.867 0.354-1.562 0.79-1.562zM1.74 14.319c-0.062 0.487-0.127 0.972-0.219 1.412 0.41-0.010 0.774-0.020 1.763-0.020l-2.262 2.449-0.019 0.878c0.555-0.037 1.246-0.049 2.037-0.049 0.707 0 1.417 0.010 1.871 0.049 0.081-0.572 0.162-0.953 0.262-1.421-0.344 0.019-0.943 0.029-1.889 0.029l2.262-2.461 0.029-0.867c-0.546 0.029-1.037 0.037-1.899 0.037-0.936 0-1.218-0.009-1.936-0.037zM8.146 14.206c-1.454 0.078-2.603 1.276-2.603 2.743 0 0.052 0.001 0.103 0.004 0.154l-0-0.007c-0.006 0.055-0.009 0.118-0.009 0.182 0 1.054 0.854 1.908 1.908 1.908 0.039 0 0.077-0.001 0.115-0.003l-0.005 0c1.454-0.075 2.604-1.273 2.604-2.738 0-0.056-0.002-0.112-0.005-0.167l0 0.008c0.006-0.056 0.009-0.12 0.009-0.186 0-1.047-0.849-1.896-1.896-1.896-0.043 0-0.085 0.001-0.127 0.004l0.006-0zM14.244 14.196c-0.875 0.145-1.584 0.736-1.894 1.528l-0.006 0.017c0.059-0.288 0.093-0.618 0.093-0.957 0-0.19-0.011-0.378-0.032-0.563l0.002 0.023c-0.475 0.084-1.030 0.139-1.595 0.152l-0.013 0c0.003 0.081 0.004 0.177 0.004 0.273 0 0.452-0.035 0.895-0.102 1.328l0.006-0.048-0.209 1.431c-0.082 0.562-0.172 1.211-0.264 1.621h1.691c0.009-0.249 0.072-0.639 0.117-0.982l0.145-0.982c0.119-0.639 0.627-1.392 1.018-1.392 0.227 0 0.219 0.22 0.155 0.63l-0.164 1.106c-0.082 0.562-0.172 1.211-0.264 1.621h1.708c0.010-0.249 0.064-0.64 0.11-0.982l0.145-0.982c0.117-0.64 0.627-1.392 1.017-1.392 0.227 0 0.219 0.21 0.182 0.495l-0.409 2.862h1.56l0.547-3.26c0.119-0.811 0.055-1.545-0.845-1.545-0.85 0.137-1.542 0.701-1.856 1.461l-0.006 0.016c0.109-0.762 0.045-1.477-0.846-1.477zM28.961 14.144c-1.473 0.079-2.637 1.292-2.637 2.777 0 0.053 0.001 0.105 0.004 0.157l-0-0.007c-0.006 0.056-0.009 0.121-0.009 0.186 0 1.067 0.865 1.933 1.933 1.933 0.039 0 0.078-0.001 0.116-0.003l-0.005 0c1.473-0.077 2.638-1.29 2.638-2.775 0-0.057-0.002-0.113-0.005-0.169l0 0.008c0.006-0.056 0.009-0.122 0.009-0.188 0-1.061-0.86-1.921-1.921-1.921-0.043 0-0.086 0.001-0.128 0.004l0.006-0zM20.794 14.066c-0.162 0.003-0.318 0.015-0.472 0.035l0.021-0.002c-0.628 0.072-1.197 0.264-1.706 0.551l0.022-0.012 0.325 0.986c0.353-0.2 0.765-0.344 1.204-0.405l0.018-0.002c0.672-0.082 0.946 0.125 0.987 0.469 0.005 0.046 0.008 0.1 0.008 0.155 0 0.073-0.005 0.144-0.015 0.214l0.001-0.008-0.017 0.070c-0.248-0.051-0.533-0.080-0.826-0.080-0.192 0-0.382 0.013-0.567 0.037l0.022-0.002c-0.602 0.046-1.131 0.326-1.502 0.747l-0.002 0.002c-0.196 0.268-0.313 0.605-0.313 0.969 0 0.114 0.012 0.226 0.034 0.334l-0.002-0.011c0.101 0.568 0.59 0.993 1.179 0.993 0.113 0 0.223-0.016 0.327-0.045l-0.008 0.002c0.557-0.061 1.035-0.355 1.341-0.782l0.004-0.006c-0.006 0.14-0.019 0.271-0.040 0.399l0.003-0.019c-0.022 0.138-0.054 0.26-0.095 0.378l0.005-0.015 1.555 0.001q-0.012-0.228-0.001-0.456 0.068-0.86 0.309-2.563c0.014-0.108 0.022-0.232 0.022-0.359 0-0.134-0.009-0.265-0.026-0.394l0.002 0.015c-0.1-0.805-0.785-1.211-1.794-1.197zM25.516 12.813l-1.572 0.591-0.209 0.887-0.557 0.026-0.144 1.222h0.51l-0.264 1.887c-0.164 1.173 0.045 1.726 1.081 1.726 0.521-0.009 1.008-0.145 1.434-0.379l-0.016 0.008 0.181-1.125c-0.224 0.122-0.485 0.207-0.763 0.237l-0.009 0.001c-0.309 0-0.345-0.162-0.281-0.61l0.236-1.745h1.053c0.038-0.257 0.164-1.096 0.2-1.25h-1.081z"/>
    </svg>`
  },
  {
    id: 'swiggy',
    label: 'Swiggy Dineout',
    href: 'https://www.swiggy.com/restaurants/fort-jaipur-kitchen-and-banquet-tonk-road-malviya-nagar-2-jaipur-888811/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve',
    icon: `<svg viewBox="1 1 22 22" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24" height="24">
    <path d="M12.878,5.92841a.297.297,0,0,1,.31378.335c.002.09192.00348.18384.0036.27575.00061.59241-.00238,1.18488.00208,1.77723.00329.43353.07947.517.49939.56909a14.83182,14.83182,0,0,0,3.14795-.04578,4.94837,4.94837,0,0,0,1.57287-.37384.50722.50722,0,0,0,.34461-.60242,6.83113,6.83113,0,0,0-5.3432-5.71106,6.60826,6.60826,0,0,0-3.64844.243A6.718,6.718,0,0,0,7.07709,4.147,6.27211,6.27211,0,0,0,5.23022,8.43164,11.18781,11.18781,0,0,0,6.7558,13.9494a1.34216,1.34216,0,0,0,1.32989.74726c.65332-.01569,1.30732-.00354,1.96106-.00354v-.00348q1.04187,0,2.08368.00048c.24927.00055.44654.06012.44458.37226-.00458.72522.00067,1.45044-.00335,2.1756-.00129.22015-.06324.432-.32612.43408-.26391.00207-.32641-.20893-.32971-.42951-.00512-.34716.00019-.69452.00061-1.04174.00049-.45105-.07342-.55677-.52319-.639a7.70231,7.70231,0,0,0-2.348-.0199,2.5959,2.5959,0,0,0-.80054.19476c-.21185.09973-.29608.24506-.19318.46729.10706.23126.20691.46728.3332.68786a43.875,43.875,0,0,0,3.42651,4.95569c.15393.19947.27313.20362.43109.0105.34869-.42639.71491-.83856,1.05994-1.26788a34.22649,34.22649,0,0,0,3.57635-5.25989,14.17129,14.17129,0,0,0,1.49451-3.87146A1.20324,1.20324,0,0,0,17.36145,9.824,6.94268,6.94268,0,0,0,15.691,9.66235c-.909-.00677-1.81812-.00348-2.72717-.00268-.24481.00024-.42688-.07007-.42707-.3573-.00048-1.01117-.00183-2.0224.00184-3.03351C12.53943,6.053,12.64349,5.92041,12.878,5.92841Z"/>
</svg>`
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/918766155155',
    icon: `<svg viewBox="0 0 32 32" fill="#ffffff" stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.340-0.247-0.712-0.434z"/>
  </svg>`
  },
  {
    id: 'google',
    label: 'Google Reviews',
    href: 'https://www.google.com/search?client=ms-android-samsung-ss&hs=nKF&sca_esv=fc975d16ff6c5b09&sxsrf=ANbL-n4pa0hed4_62DPctm3bpHYxmt86Rw:1774352203568&q=fort+restaurant+jaipur+reviews&uds=ALYpb_nCPQpJLc5J66djUK8VRBeV_Cn3P1x4_nYdMeYCXXfFIbGy5LjDYqSU5LAjebxB-2CsMyU-0yHE6MZF23zz9rjkcorOhPRq-4XKoDbIsf2zfHCkppvYXgtxHHw6k_PtQ_AvVQuYPg89W3WFsxJZvsjJq5vMdeMURI-MJaVeRcL7DGF0amFQsn4O4o6zB2NS1CTqSV2bHR9YL7g3NZYb2xU4mmG0nYplYFK8AXB_UoqWYN0wmyIkeT2sk6in7-AeVVcRPIe4PRmhqa_kVtDUuxR-2NBDJIA2iOyYFU5NQ_FGm6XZvsEOau2q-JBt-iPSTsUpK3LWCsEmOf3do4LsYz-CjDZEuR7iUXzM8uHdceJclMX-esqWY9DwOB-VJl_g-vz1CybOJUDX84nKmNaaPSWObTRdjjsiiBwt7v-iuJwMOOcDF1hnusbVuYBu1QyZohdkB4a2ubVW4RzZWrEjcqYM8l60D66-GFh6GmEl89rVoivEFv64VjBxkNLZw3X5JZrnHYX2yry_RR39O5t3Cv75gsfrZA&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcs8GaXhkjNhtB-_tlGWmWdcRwTj0NUikdIHcl0r6ZnLA4QTqJdav6hDC6eKXFeIIW9JLEG4EhpDFQRN6z66oMLNqJC7Auej0sxvKeRCiSEBl-M4Vw%3D%3D&sa=X&sqi=2&ved=2ahUKEwje8LKGubiTAxXgRmwGHa_sD-oQk8gLegQIGRAB&ictx=1&stq=1&cs=1&lei=S3fCaZ6fIuCNseMPr9m_0A4#ebo=3',
    icon: `<svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="24" height="24" stroke="none">
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#ffffff"/>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#ffffff"/>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#ffffff"/>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#ffffff"/>
  </svg>`
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18v3VEoJ7D/',
    icon: `<svg viewBox="329 7239 10 20" fill="#ffffff" stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"/>
  </svg>`
  }
];

const arrowSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <polyline points="9 18 15 12 9 6" stroke="#C9A96E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function renderLinks() {
  return links.map(link => `
    <a class="link-card" data-platform="${link.id}" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
      <div class="link-card__icon-wrap">
        <div class="link-card__icon-box">${link.icon}</div>
      </div>
      <span class="link-card__label">${link.label}</span>
      <span class="link-card__arrow">${arrowSVG}</span>
    </a>
  `).join('');
}

function renderHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#5C1A0B" />
  <meta name="description" content="Fort Jaipur Kitchen & Banquet – Authentic Rajasthani dining in a heritage fort setting, Jaipur." />
  <meta property="og:title" content="Fort Jaipur Kitchen & Banquet" />
  <meta property="og:description" content="Experience royal Rajasthani cuisine at Fort Jaipur. Reserve, order, or connect with us." />
  <meta property="og:image" content="/public/images/fort-bg-banner.jpeg" />
  <meta property="og:type" content="website" />
  <title>Fort Jaipur Kitchen & Banquet</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="page-wrapper">

  <!-- HERO -->
  <div class="hero">
    <img class="hero__img" src="/public/images/fort-bg-banner.jpeg" alt="Fort Jaipur Kitchen & Banquet" onerror="this.style.display='none'" />
    <div class="hero__overlay"></div>
    <!-- Decorative arch motif -->
    
  </div>

  <!-- PROFILE -->
  <div class="profile">
    <div class="profile__avatar-wrap">
      <img
        class="profile__avatar"
        src="/public/images/fort-logo.png"
        alt="Fort Jaipur Logo"
        onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="profile__avatar-fallback" aria-hidden="true">
        <svg viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" fill="#2C1206"/>
          <text x="14" y="54" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#C9A96E">FORT</text>
        </svg>
      </div>
    </div>
    <div class="profile__divider" aria-hidden="true">
      <svg viewBox="0 0 200 14" xmlns="http://www.w3.org/2000/svg" width="160" height="12">
        <line x1="0" y1="7" x2="75" y2="7" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
        <polygon points="100,1 106,7 100,13 94,7" fill="none" stroke="#C9A96E" stroke-width="1"/>
        <line x1="125" y1="7" x2="200" y2="7" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
      </svg>
    </div>
    <h1 class="profile__name">Fort Jaipur</h1>
    <p class="profile__subtitle">Kitchen &amp; Banquet</p>
    <p class="profile__tagline">Royal Rajasthani Heritage Dining</p>

    <!-- ICON ROW -->
    <div class="icon-row">
      <a class="icon-btn" href="tel:+918766155155" aria-label="Call us">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C9A96E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3-8.57A2 2 0 012.82 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.37a16 16 0 006.72 6.72l1.23-1.23a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </a>
      <a class="icon-btn" href="mailto:info@fortjaipur.com" aria-label="Email us">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C9A96E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>
      <a class="icon-btn" href="https://www.google.com/maps/search/fort+jaipur+kitchen+banquet+tonk+road+jaipur" target="_blank" rel="noopener noreferrer" aria-label="Get directions">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C9A96E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </a>
    </div>
  </div>

  <!-- LINK CARDS -->
  <div class="links">
    ${renderLinks()}
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <span class="footer__ornament">✦</span>
    © ${new Date().getFullYear()} Fort Jaipur Kitchen &amp; Banquet · Tonk Road, Jaipur
    <span class="footer__ornament">✦</span>
  </footer>

</div>
</body>
</html>`;
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(renderHTML());
});

app.use((req, res) => { res.redirect('/'); });

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅  Fort Jaipur Links running at http://localhost:${PORT}`);
  });
}

module.exports = app;