(function () {
  "use strict";

  /* ---------------------------------------------------------------
     GERMAN TRANSLATIONS
     Key   = exact English text as it appears in index.html
     Value = German text
  --------------------------------------------------------------- */
  const DE = {
    // Page title / meta
    "Maison Aurelia | Exceptional Real Estate": "Maison Aurelia | Außergewöhnliche Immobilien",
    "Discover exceptional luxury residences, private estates and architectural properties with Maison Aurelia.":
      "Entdecken Sie außergewöhnliche Luxusresidenzen, private Anwesen und architektonische Immobilien mit Maison Aurelia.",

    // Navigation (desktop)
    "Residence": "Residenz",
    "Details": "Details",
    "Tour": "Rundgang",
    "Location": "Lage",
    "Properties": "Immobilien",
    "Private Viewing": "Privatbesichtigung",

    // Navigation (mobile)
    "01 — Home": "01 — Startseite",
    "02 — Residence": "02 — Residenz",
    "03 — Details": "03 — Details",
    "04 — Film": "04 — Film",
    "05 — Location": "05 — Lage",
    "06 — Collection": "06 — Kollektion",
    "07 — Private Viewing": "07 — Privatbesichtigung",

    // Aria labels / titles
    "Open navigation": "Navigation öffnen",
    "Close": "Schließen",
    "Scroll to top": "Nach oben scrollen",
    "Property video": "Immobilienvideo",
    "Property location": "Standort der Immobilie",

    // Hero
    "PRIVATE RESIDENCE · DRESDEN": "PRIVATRESIDENZ · DRESDEN",
    "A residence": "Ein Zuhause",
    "without compromise.": "ohne Kompromisse.",
    "A rare architectural residence created for those who appreciate privacy, proportion and exceptional design.":
      "Eine seltene architektonische Residenz für Menschen, die Privatsphäre, Proportion und außergewöhnliches Design schätzen.",
    "Request Private Viewing": "Privatbesichtigung anfragen",
    "Explore Residence": "Residenz entdecken",
    "Exclusive Asking Price": "Exklusiver Angebotspreis",
    "Private sale · Ref. MA-001": "Privatverkauf · Ref. MA-001",

    // Residence section
    "01 / THE RESIDENCE": "01 / DIE RESIDENZ",
    "Architecture": "Architektur",
    "with presence.": "mit Präsenz.",
    "Hidden behind mature landscaping, this contemporary residence combines generous proportions with refined materials and carefully controlled natural light.":
      "Hinter ausgewachsener Bepflanzung verborgen, verbindet diese zeitgenössische Residenz großzügige Proportionen mit edlen Materialien und sorgfältig gelenktem Tageslicht.",
    "Designed around a seamless relationship between interior and exterior spaces, the property offers approximately 420 m² of living space, private gardens, a pool and expansive entertaining areas.":
      "Gestaltet um ein nahtloses Zusammenspiel von Innen- und Außenräumen, bietet die Immobilie rund 420 m² Wohnfläche, private Gärten, einen Pool und weitläufige Bereiche zum Entertainment.",
    "Arrange a confidential consultation": "Vertrauliche Beratung vereinbaren",

    // Gallery alt texts
    "Luxury modern residence": "Moderne Luxusresidenz",
    "Residence exterior": "Außenansicht der Residenz",
    "Luxury interior": "Luxuriöses Interieur",
    "Luxury house": "Luxushaus",
    "Luxury kitchen": "Luxusküche",
    "Luxury bedroom": "Luxuriöses Schlafzimmer",

    // Property profile
    "02 / PROPERTY PROFILE": "02 / OBJEKTPROFIL",
    "The essential": "Die wesentlichen",
    "details.": "Details.",
    "Living Space": "Wohnfläche",
    "Private Grounds": "Privates Grundstück",
    "Bedrooms": "Schlafzimmer",
    "Bathrooms": "Badezimmer",
    "Pool": "Pool",
    "Garage": "Garage",
    "3 Vehicles": "3 Fahrzeuge",
    "Construction": "Baujahr",
    "Energy Standard": "Energiestandard",

    // Signature features
    "03 / SIGNATURE FEATURES": "03 / BESONDERE MERKMALE",
    "Designed around": "Gestaltet für",
    "your lifestyle.": "Ihren Lebensstil.",
    "Panoramic Glazing": "Panoramaverglasung",
    "Floor-to-ceiling windows create exceptional daylight and uninterrupted garden views.":
      "Raumhohe Fenster sorgen für außergewöhnlich viel Tageslicht und ungehinderte Blicke in den Garten.",
    "Private Wellness": "Privater Wellnessbereich",
    "Spa-inspired bathroom spaces, sauna and dedicated wellness area.":
      "Spa-inspirierte Badezimmer, Sauna und ein eigener Wellnessbereich.",
    "Smart Residence": "Smarte Residenz",
    "Integrated lighting, climate, security and shading controlled throughout the property.":
      "Integrierte Steuerung von Licht, Klima, Sicherheit und Beschattung im gesamten Haus.",
    "Future Ready": "Zukunftssicher",
    "Photovoltaic system, energy-efficient systems and EV charging infrastructure.":
      "Photovoltaikanlage, energieeffiziente Haustechnik und Ladeinfrastruktur für Elektrofahrzeuge.",
    "Complete Privacy": "Absolute Privatsphäre",
    "Secure gated access and carefully landscaped private grounds.":
      "Gesicherte Zufahrt und sorgfältig gestaltetes privates Grundstück.",
    "Entertaining Kitchen": "Küche zum Genießen",
    "Bespoke kitchen with premium appliances and generous dining space.":
      "Maßgefertigte Küche mit hochwertigen Geräten und großzügigem Essbereich.",

    // Film
    "THE FILM": "DER FILM",
    "Experience the": "Erleben Sie die",
    "residence.": "Residenz.",

    // Location
    "04 / LOCATION": "04 / LAGE",
    "Close to": "Nah an",
    "everything.": "allem.",
    "A private setting with effortless access to culture, international connections and everyday essentials.":
      "Ein privates Umfeld mit müheloser Anbindung an Kultur, internationale Verbindungen und den täglichen Bedarf.",
    "City Centre": "Stadtzentrum",
    "International Airport": "Internationaler Flughafen",
    "International School": "Internationale Schule",
    "Train Station": "Bahnhof",
    "Private Residence": "Privatresidenz",
    "Dresden, Germany": "Dresden, Deutschland",

    // Value
    "05 / VALUE": "05 / WERT",
    "Property as a": "Immobilie als",
    "long-term asset.": "langfristige Wertanlage.",
    "Exceptional real estate combines lifestyle value, scarcity and long-term ownership potential.":
      "Außergewöhnliche Immobilien vereinen Lebensqualität, Knappheit und langfristiges Wertpotenzial.",
    "Property Type": "Objektart",
    "Ownership": "Eigentumsform",
    "Freehold": "Volleigentum",
    "Energy Class": "Energieklasse",
    "Availability": "Verfügbarkeit",
    "Private Sale": "Privatverkauf",
    "Investment information is illustrative only and should not be considered financial advice.":
      "Die Angaben zur Wertanlage dienen lediglich der Veranschaulichung und stellen keine Anlageberatung dar.",

    // Collection
    "06 / THE COLLECTION": "06 / DIE KOLLEKTION",
    "More exceptional": "Weitere außergewöhnliche",
    "residences.": "Residenzen.",
    "View private collection": "Private Kollektion ansehen",
    "Luxury villa": "Luxusvilla",
    "Modern residence": "Moderne Residenz",
    "Luxury property": "Luxusimmobilie",
    "Luxury villa exterior": "Außenansicht der Luxusvilla",
    "PRIVATE SALE": "PRIVATVERKAUF",
    "NEW": "NEU",
    "EXCLUSIVE": "EXKLUSIV",
    "MUNICH · BOGENHAUSEN": "MÜNCHEN · BOGENHAUSEN",
    "510 m² · 6 beds · 5 baths": "510 m² · 6 Schlafzimmer · 5 Bäder",
    "365 m² · 4 beds · 4 baths": "365 m² · 4 Schlafzimmer · 4 Bäder",
    "440 m² · 5 beds · 4 baths": "440 m² · 5 Schlafzimmer · 4 Bäder",
    "390 m² · 5 beds · 4 baths": "390 m² · 5 Schlafzimmer · 4 Bäder",

    // Journal / social
    "07 / JOURNAL": "07 / JOURNAL",
    "Life beyond": "Leben jenseits",
    "the address.": "der Adresse.",
    "Instagram property": "Instagram – Immobilie",
    "Instagram interior": "Instagram – Interieur",
    "Instagram villa": "Instagram – Villa",
    "Instagram kitchen": "Instagram – Küche",

    // Contact
    "08 / PRIVATE VIEWING": "08 / PRIVATBESICHTIGUNG",
    "Let's discuss": "Sprechen wir über",
    "your next address.": "Ihre nächste Adresse.",
    "Request a confidential viewing or speak privately with one of our property advisors.":
      "Fragen Sie eine vertrauliche Besichtigung an oder sprechen Sie persönlich mit einem unserer Immobilienberater.",
    "Private Client Office": "Büro für Privatkunden",
    "Email": "E-Mail",
    "Office": "Büro",
    "Dresden · Germany": "Dresden · Deutschland",

    // Form
    "Full Name *": "Vollständiger Name *",
    "Email *": "E-Mail *",
    "Phone": "Telefon",
    "I'm interested in": "Ich interessiere mich für",
    "Private viewing": "Privatbesichtigung",
    "Purchasing": "Kauf",
    "Property portfolio": "Immobilienportfolio",
    "Selling a property": "Verkauf einer Immobilie",
    "Approximate Budget": "Ungefähres Budget",
    "Please select": "Bitte auswählen",
    "€1m – €2m": "1 Mio. € – 2 Mio. €",
    "€2m – €5m": "2 Mio. € – 5 Mio. €",
    "€5m – €10m": "5 Mio. € – 10 Mio. €",
    "€10m+": "10 Mio. €+",
    "Message": "Nachricht",
    "I agree to the processing of my data according to the privacy policy.":
      "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.",
    "Please enter your name.": "Bitte geben Sie Ihren Namen ein.",
    "Please enter a valid email address.": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "Your name": "Ihr Name",
    "you@example.com": "sie@beispiel.de",
    "Tell us how we can assist...": "Teilen Sie uns mit, wie wir Sie unterstützen können...",

    // Possible messages from contact-form.js (adjust to match your file's exact texts)
    "Thank you. Your request has been received.": "Vielen Dank. Ihre Anfrage ist bei uns eingegangen.",
    "Thank you. We will contact you shortly.": "Vielen Dank. Wir melden uns in Kürze bei Ihnen.",
    "Please fill in all required fields.": "Bitte füllen Sie alle Pflichtfelder aus.",
    "Please accept the privacy policy.": "Bitte akzeptieren Sie die Datenschutzerklärung.",

    // Footer
    "Exceptional residences for exceptional lives.": "Außergewöhnliche Residenzen für außergewöhnliche Leben.",
    "Explore": "Entdecken",
    "Company": "Unternehmen",
    "About": "Über uns",
    "Advisory": "Beratung",
    "Journal": "Journal",
    "Contact": "Kontakt",
    "Follow": "Folgen",
    "Privacy": "Datenschutz",
    "Imprint": "Impressum",
    "Cookies": "Cookies"
  };

  /* ---------------------------------------------------------------
     ENGINE (no need to edit below)
  --------------------------------------------------------------- */
  const ATTRIBUTES = ["placeholder", "alt", "title", "aria-label"];
  const SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  const BUTTON_SELECTOR = "#luxuryLanguageButton, #luxuryMobileLanguageButton";

  const desktopButton = document.querySelector("#luxuryLanguageButton");
  const mobileButton = document.querySelector("#luxuryMobileLanguageButton");
  const metaDescription = document.querySelector('meta[name="description"]');

  const textRecords = new WeakMap();
  const attrRecords = new WeakMap();
  let titleRecord = null;
  let metaRecord = null;

  let language = "EN";
  try {
    const saved = localStorage.getItem("luxuryLanguage");
    if (saved === "EN" || saved === "DE") language = saved;
    // Optional: default to German for German browsers
    // else if ((navigator.language || "").toLowerCase().startsWith("de")) language = "DE";
  } catch (e) {}

  function normalize(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  function translateValue(original) {
    const key = normalize(original);
    if (!key) return undefined;
    const translated = DE[key];
    if (translated === undefined) return undefined;
    const lead = original.match(/^\s*/)[0];
    const trail = original.match(/\s*$/)[0];
    return lead + translated + trail;
  }

  // Generic record handling: keeps the original English and
  // notices if another script changed the value in the meantime.
  function syncRecord(rec, currentValue) {
    if (rec.out !== null && currentValue !== rec.out) {
      rec.orig = currentValue;
      rec.out = null;
    } else if (rec.out === null && currentValue !== rec.orig) {
      rec.orig = currentValue;
    }
  }

  function processText(node) {
    if (!node.nodeValue || !node.nodeValue.trim()) return;
    let rec = textRecords.get(node);
    if (!rec) {
      rec = { orig: node.nodeValue, out: null };
      textRecords.set(node, rec);
    } else {
      syncRecord(rec, node.nodeValue);
    }
    if (language === "DE") {
      const out = translateValue(rec.orig);
      if (out !== undefined) {
        if (node.nodeValue !== out) node.nodeValue = out;
        rec.out = out;
      } else {
        rec.out = null;
      }
    } else if (rec.out !== null) {
      node.nodeValue = rec.orig;
      rec.out = null;
    }
  }

  function processAttributes(el) {
    ATTRIBUTES.forEach(function (attr) {
      if (!el.hasAttribute(attr)) return;
      let recs = attrRecords.get(el);
      if (!recs) { recs = {}; attrRecords.set(el, recs); }
      const current = el.getAttribute(attr);
      let rec = recs[attr];
      if (!rec) {
        rec = recs[attr] = { orig: current, out: null };
      } else {
        syncRecord(rec, current);
      }
      if (language === "DE") {
        const out = translateValue(rec.orig);
        if (out !== undefined) {
          if (current !== out) el.setAttribute(attr, out);
          rec.out = out;
        } else {
          rec.out = null;
        }
      } else if (rec.out !== null) {
        el.setAttribute(attr, rec.orig);
        rec.out = null;
      }
    });
  }

  function processTree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (root.parentElement && !root.parentElement.closest(BUTTON_SELECTOR)) processText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (SKIP_TAGS[root.tagName] || root.closest(BUTTON_SELECTOR)) return;

    processAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === Node.ELEMENT_NODE) {
          if (SKIP_TAGS[n.tagName]) return NodeFilter.FILTER_REJECT;
          if (n.matches(BUTTON_SELECTOR)) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === Node.TEXT_NODE) processText(n);
      else processAttributes(n);
    }
  }

  function processHead() {
    // <title>
    const current = document.title;
    if (!titleRecord) titleRecord = { orig: current, out: null };
    else syncRecord(titleRecord, current);
    if (language === "DE") {
      const out = translateValue(titleRecord.orig);
      if (out !== undefined) { document.title = out; titleRecord.out = out; }
    } else if (titleRecord.out !== null) {
      document.title = titleRecord.orig;
      titleRecord.out = null;
    }

    // <meta name="description">
    if (metaDescription) {
      const c = metaDescription.getAttribute("content");
      if (!metaRecord) metaRecord = { orig: c, out: null };
      else syncRecord(metaRecord, c);
      if (language === "DE") {
        const out = translateValue(metaRecord.orig);
        if (out !== undefined) { metaDescription.setAttribute("content", out); metaRecord.out = out; }
      } else if (metaRecord.out !== null) {
        metaDescription.setAttribute("content", metaRecord.orig);
        metaRecord.out = null;
      }
    }
  }

  // Translate content that other scripts add later (e.g. form messages)
  const observer = new MutationObserver(function (mutations) {
    if (language !== "DE") return;
    observer.disconnect();
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) { processTree(node); });
    });
    startObserver();
  });

  function startObserver() {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function applyLanguage() {
    observer.disconnect();
    processTree(document.body);
    processHead();
    startObserver();

    // The desktop button shows the language you can switch TO
    if (desktopButton) desktopButton.textContent = language === "EN" ? "DE" : "EN";
    document.documentElement.lang = language.toLowerCase();

    try { localStorage.setItem("luxuryLanguage", language); } catch (e) {}
  }

  function switchLanguage() {
    language = language === "EN" ? "DE" : "EN";
    applyLanguage();
  }

  // Helper for other scripts (e.g. contact-form.js):
  // window.luxuryTranslate("Some English message") -> German if DE is active
  window.luxuryTranslate = function (text) {
    if (language !== "DE") return text;
    const out = translateValue(text);
    return out !== undefined ? out : text;
  };

  if (desktopButton) desktopButton.addEventListener("click", switchLanguage);
  if (mobileButton) mobileButton.addEventListener("click", switchLanguage);

  applyLanguage();
})();
