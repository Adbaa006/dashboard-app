# dashboard-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


#### Project Production

DIN PC
┌─────────────────────────┐
│ Kode i Vue + backend    │
│                         │
│ git push                │
└───────────┬─────────────┘
            │
            ▼
GITHUB
┌─────────────────────────┐
│ Lagrer nyeste kode      │
└───────────┬─────────────┘
            │ git pull
            ▼
PROXMOX / UBUNTU-SERVER
┌────────────────────────────────────┐
│ ~/dashboard-app                    │
│                                    │
│ Frontend: Vue                      │
│ npm run build                      │
│ lager dist/                        │
│                                    │
│ Backend: Express                   │
│ backend/server.js                  │
│ kjøres av PM2                      │
└───────────┬────────────────────────┘
            │
            ▼
PM2
┌─────────────────────────┐
│ Holder server.js i gang │
│ på port 3000            │
└───────────┬─────────────┘
            │
            ▼
NETTLESER
┌─────────────────────────┐
│ http://192.168.20.64:3000│
│                         │
│ Viser Vue-siden         │
│ Henter/lagrer tickets   │
└─────────────────────────┘

Vue-koden bygges til vanlige nettsidefiler i dist/
Backend serverer både nettsiden og API-et
PM2 passer på at backend alltid kjører
Brukeren åpner siden via server-IP-en

PC → git push → server git pull → npm run build → pm2 restart

                           INTERNETT / HJEMMENETT

 ┌─────────────────────┐
 │        GitHub       │
 │  Versjonskontroll   │
 └─────────┬───────────┘
           │ git push / git pull
           │
           ▼


#### Network

┌────────────────────────────────────────────────────────────┐
│                     PROXMOX SERVER                         │
│                                                            │
│  Ubuntu VM / Container                                     │
│  IP: 192.168.20.64                                         │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ dashboard-app                                       │  │
│  │                                                      │  │
│  │ Frontend (Vue)                                      │  │
│  │ npm run build → dist/                               │  │
│  │                                                      │  │
│  │ Backend (Node + Express)                            │  │
│  │ server.js                                           │  │
│  │ API: /tickets                                       │  │
│  └──────────────────────┬──────────────────────────────┘  │
│                         │                                 │
│                         ▼                                 │
│                    PM2 Process Manager                    │
│                    Holder appen kjørende                  │
│                    Port 3000                              │
└─────────────────────────┬──────────────────────────────────┘
                          │
                          │ HTTP
                          ▼

         ┌────────────────────────────────┐
         │         Nettleser              │
         │  http://192.168.20.64:3000    │
         └──────────────┬─────────────────┘
                        │
        ┌───────────────┴────────────────┐
        │                                │

┌─────────────────────┐      ┌─────────────────────┐
│      MacBook        │      │    Stasjonær PC     │
│                     │      │                     │
│ VS Code             │      │ Nettleser           │
│ Vue-utvikling       │      │ Tester nettsiden    │
│ git push            │      │                     │
│ ssh til server      │      │                     │
└─────────────────────┘      └─────────────────────┘

#### Data Flow while Programming

MacBook
↓
git push
↓
GitHub
↓
Server → git pull
↓
npm run build
↓
pm2 restart

#### Data Flow while Using

Nettleser
↓
192.168.20.64:3000
↓
Express-server
↓
Vue frontend vises
↓
API-kall til /tickets
↓
tickets.json oppdateres