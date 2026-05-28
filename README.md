# Tittel

IT-support dashboard

# Beskrivelse

Dette er et dashboard for brukere som jobber med brukerstøtte. Her får man raskt og enkelt en tydelig oversikt over support-tickets som allerede eksisterer. I tillegg til at man lett kan legge til nye tickets, redigere eksisterende tickets og slette tickets som det ikke lenger er bruk for. 

# Formål

Formålet med denne appen er å gjøre jobben lettere for de som jobber innen brukerstøtte i IT-yrker. Det er viktig å holde god orden og kontroll på oppdragene man får. Både for sin egen del, det gjør at det er mindre å tenke på hele tiden, men også for generell effektivitet og kvalitet. Med denne appen kan man raskt opprette nye tickets og dele dem til ansatte mens man fremdeles er i samtale med kunden. Det bidrar til å unngå misforståelse av kunden og gjetting eller usikkerhet om man glemmer hva problemet var. Når man deler til de ansatte kan de også begynne å jobbe med det med en gang, kanskje problemet løses allerede før kunden rekker å legge på. 

# Teknologier

Dette prosjektet bruker Vue.js for å kjøre frontend og Express.js for backend.

Vue.js benyttes først og fremst fordi det har en komponentbasert arkitektur. Istedenfor å lage hver enkelt side fullt og helt fra bunn, kan man gjenbruke komponenter. Et eksempel på dette er en nettside med header, menu, main og footer. Vanligvis vil header, menu og footer forbli lik uansett hva som vises i main. Når man bruker Vue.js kan man da lage en header-komponent, menu-komponent og footer-komponent. Da lager man disse komponentene kun én gang, også kan man hente inn innholdet til den fullstendige siden som vises til brukeren. Dette sparer datakraft, da maskinen ikke må laste opp en helt ny side, og det går raskere for brukeren. Vue.js har også data-binding som betyr at den til enhver tid ser gjennom Javascript-dataene dine og oppdaterer dem. Det vil si at dersom brukeren gjør noe på nettsiden som endrer en variabel i Javascript, sørger Vue for at nettsiden oppdateres umiddelbart. Som utvikler slipper man å bruke lange og tunge kommandoer som "document.getElementById" for å lete opp HTML-elementer og endre dem manuelt. Sist, men ikke minst har Vue.js diverse direktiver eller HTML-utvidelser. I tillegg til de vanlige HTML-kommandoene kan man bruke Vue sine egne spesialkommandoer "v-". Noen eksempler på dette er "v-if" som endrer hva som vises eller skjules på skjermen basert på en betingelse. "v-for" kan brukes for å lage lister ved at det går gjennom en liste med data og viser et HTML-element for hvert punkt. 

https://hm24.no/programmering/vue-js-hva-det-er-hvordan-det-fungerer-og-alt-du-kan-gjore-med-dette-rammeverket/
https://vuejs.org/guide/introduction

Express brukes fordi det forenkler håndteringen av nettverksforespørsler og databaser, noe som gjør det raskt og effektivt å bygge webservere og API-er. Express tar seg av routing, middleware og forespørsler/responser. Routing er en beskjed til serveren om hva den skal gjøre når brukeren besøker en nettadresse. I dette tilfellet er det "/support" eller "/detaljer", brukeren klikker rundt og Express passer på at serveren leverer riktig innhold basert på routing. Her kommer også API-ene inn i bildet ved at Express med routing sørger for at serveren gjør som den skal. ("GET", "POST", "PUT", "DELETE"). Middleware er små kodefunksjoner som utføres før forespørslene når endepunktene. Det kan blant annet være å gjøre sikkerhetssjekker, autentisering, som å sjekke at en bruker er logget inn, eller å gjøre om data, for eksempel JSON, til lesbar tekst.

https://www.linkedin.com/pulse/nodejs-vs-expressjs-whats-difference-why-matters-siddharth-sharma-swttf/

# Installasjon

Per nå må nettsiden kjøres fra en server på det lokale internettet, derfor må man være koblet til det for å kunne installere prosjektet. Ellers er fremgangsmåten som følgende:

1. ssh til server - ssh server@192.168.20.64
2. klon prosjektet fra Github - HTTPS vil se slik ut: https://github.com/Adbaa006/dashboard-app.git
3. kjør følgende kode i Terminal
  - cd ~~
  - git clone https://github.com/Adbaa006/dashboard-app.git dashboard-app
4. installer og bygg frontend
  - npm install
  - npm run build
5. installer backend
  - cd backend
  - npm install
6. start backend med PM2
  - pm2 start server.js --name dashboard-app
  - pm2 save
7. sjekk at den kjører
  - pm2 list
8. på nett skal den være tilgjengelig på: http://192.168.20.64:3000

# Oppdatere endringer

Ettersom man kjører nettsiden via en server kommer ikke oppdateringer automatisk etter at de er blitt pushet i Github. For å få oppdatert nettsiden må man gjøre følgende:

1. commit og push fra Github
2. ta imot og kjør på server
3. kjør følgende kode i Terminal
  - ssh server@192.168.20.64
  - cd dashboard-app
  - git pull
4. installer og bygg frontend
  - npm install
  - npm run build
5. installer backend
  - cd backend
  - npm install
6. restart pm2
  - pm2 restart dashboard-app