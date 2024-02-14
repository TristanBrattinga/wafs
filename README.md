# Web apps from Scratch 2023/2024

[//]: # (<img src="./readme-images/intro.gif" alt="Intro GIF">)

## Introductie

Voor het vak Web apps from Scratch hebben we de opdracht gekregen om een single-page website te maken.
Het hoofddoel van de opdracht is om data op te halen van een externe bron. Deze data moet worden weergegeven
op jouw website, zodat jij in het tweede gedeelte van het vak deze data weer op kan halen in een team app.
Hieronder heb ik een schematisch overzicht gemaakt van de logica van de opdracht:

<img src="./readme-images/opdracht-schema.png" alt="Schematisch overzicht van de opdracht">

Aangezien ik al werkzaam ben als front-end developer, was dit een redelijk makkelijke opdracht voor mij.

Er zaten een aantal vereisten aan de opdracht. Zie vereisten hieronder:
<ul>
    <li>Minimaal 1 data-call door gebruik te maken van een API</li>
    <li>Gebruik van vanilla HTML, CSS & JS</li>
    <li>Minimaal 1 micro-interactie met JavaScript</li>
    <li>Volledig responsive</li>
    <li>Geen frameworks en libraries</li>
</ul>

## Week 1

---

Op maandag ben ik met mijn groepje begonnen met de idee-generatie voor onze team app. Wij willen een
web app gaan bouwen waar je ieders favoriete helden en schurken uit films, series, cartoons en anime's
kan zien. Het duurde best even voordat we het concept van de opdracht begrepen, maar dat is uiteindelijk helemaal
duidelijk geworden. Ieder bouwt zijn eigen one page web app, waarin we onze data moeten ophalen.
Uiteindelijk is het dan de bedoeling dat deze data wordt weergegeven in onze app. De teamapp zal een overkoepelende app
zijn waar al onze data in zal worden opgehaald. Op de eerste dag heb ik getest met het fetchen van data uit
een JSON-bestand. Dit ging heel gemakkelijk. Verder heb ik op maandag een basis webapp template opgezet,
bestaande uit de volgende mappenstructuur:

```
wafs/
├── docs/
│   ├── styles/
│   │   ├── style.css
│   └── index.html
└── README.md
```

Op dinsdag ben ik wat verder gaan werken aan mijn front-end. Ik heb wat Javascript geïntroduceerd om een
mobiel hamburger menu te kunnen gebruiken. Dit is mijn eerste stap richting responsiveness. Verder hebben
we later op de dag de keuze gekregen om een workshop bij te wonen. Oud-student/docent Bas de Greeuw gaf een
workshop over het inzetten van Oauth voor het gebruik van een Spotify API. We hebben hier zoals geleerd,
in blok tech een basic Node.js server opgezet, met het gebruik van een Express back-end. Dit ging voor mij
allemaal redelijk simpel. Hieronder zijn wat screenshots te zien van de code:

### server.js

<img src="readme-images/carbon.png" alt="">

Hieronder de mappenstructuur van mijn webapp op dit moment:

```
wafs/
├── data/
│   └── data.json
├── images/
├── public/
├── scripts/
│   └── server.js
├── styles/
│   └── style.css
├── views/
│   ├── pages/
│   │   └── index.ejs
│   └── partials/
│       ├── footer.ejs
│       ├── head.ejs
│       └── header.ejs
├── .env
├── .gitignore
├── .yarnnrc.yml
├── server.js
├── package.json
├── README.md
├── index.html
└── yarn.lock
```

Op woensdag ben ik begonnen met het deployen op Vercel. Ik wil mijn back-end en front-end in hetzelfde
project gaan deployen...... hie rnog meer neerzetten

---

## Week 2

In week 2 heb

---

## Team gedeelte

Wij zijn ingedeeld in groepjes aan de hand van ervaring en kunnen. Ik was in mijn groepje de 'senior' en
heb ongeschreven de rol van leider op mij gekregen. Ik ben zelf niet de beste leider, omdat ik hier niet echt
ervaring mee heb. Ook

---

## Reflectie

Ik vond dit vak op zich wel leuk, maar het was voor mij net iets te ondermaats. Ik heb wel geprobeerd om het
interessant voor mijzelf te maken door te proberen mijn Express app op Vercel te deployen, maar dit was veel te
tijdrovend voor de 1.5 week duur van dit vak. Ik weet niet of ik dit ooit nog zal proberen te doen, omdat het
vanuit Vercel al heel erg werd afgeraden en ik nooit buiten school met Express werk.

### Persoonlijk



### Technisch

Toen wij te horen kregen dat wij een Node.js app mochten opzetten met Express, was ik al veel enthousiaster.
We mochten werken met Oauth en sommige andere toepassingen. Doordat ik een Express app heb gemaakt, moet die
ook ergens live gezet worden. Het leek mij een leuk idee om dit met Vercel te gaan doen, maar dit bleek 
uiteindelijk veel te moeilijk en onhandig te zijn. Ik heb hier best wat tijd aan "verspilt", maar het uitzoeken
was op zich wel leerzaam. Ook omdat ik hier 3 dagen aan heb besteed, heb ik geleerd om voortaan eerst aan de
minimale vereisten te werken en zorgen dat deze aanwezig zijn en dan verder werken. Dit is een belangrijke les
die ik heb meegenomen hieruit :sweat-smile:.

### Samenwerken

Als ik misschien meer de rol van (bege)leider op mij had genomen, was het mogelijk wat uitdagender voor mij geweest.
Ik ben zelf niet iemand die snel de leiding neemt, omdat ik het moeilijk vind om mensen aan te sturen. Ook
dit is voor mij een leerpuntje en zal ik beter moeten gaan doen, wanneer ik degene ben met de meeste kennis.
Ook ik kan leren van uitleg geven aan mijn mede-leerlingen.


---

## Bronnenlijst

- https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/