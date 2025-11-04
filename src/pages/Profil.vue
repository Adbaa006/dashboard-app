<template>
    <main class="main">
        <div class="navn-og-bilde">
            <div class="profilbilde">
                <img src="/Users/adbaa007/project/dashboard-app/src/images/plassholder-profilbilde.svg" alt="">
            </div>
            <div class="navn-og-tittel">
                <h2>Ola Nordmann</h2>
                <h4>Tech supporter</h4>
            </div>
        </div>
        <div class="info-og-oppgaver">
            <div class="info">
                <h3>Informasjon</h3>
                <h4>Fullt navn</h4>
                <p>Ola Nordmann</p>
                <h4>Brukernavn</h4>
                <p>olano2025</p>
                <h4>E-post</h4>
                <p>ola.nordmann@selskap.no</p>
            </div>
            <div class="oppgaver">
                <h3>Oppgaver</h3>
                <h5>Kundeservice</h5>
                <h5>Frontend</h5>
                <h5>Backend</h5>
            </div>
        </div>
    </main>
</template>

<style scoped>
img {
    max-width: 15rem;
}
h2 {
    font-size: xx-large;
}
h3 {
    text-decoration: underline;
    font-size: x-large;
    padding-bottom: 1rem;
}
h4 {
    font-size: larger;
}
p {
    background-color: aliceblue;
    padding: 0.5rem;
}
h5 {
    font-size: larger;
}
</style>