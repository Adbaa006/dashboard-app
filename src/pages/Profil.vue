<script setup>
import { userProfile, supportTickets } from '../data/supportData';

console.log(userProfile)
console.log(supportTickets)
</script>

<template>
    <main class="main">
        <div class="navn-og-bilde">
            <div class="profilbilde">
                <img :src=" userProfile.avatar " alt="">
            </div>
            <div class="navn-og-tittel">
                <h2>{{ userProfile.firstName }} {{ userProfile.lastName }}</h2>
                <h4>{{ userProfile.role}}</h4>
            </div>
        </div>
        <div class="info-og-oppgaver">
            <div class="info">
                <h3>Information</h3>
                <h4>Full name</h4>
                <p>{{ userProfile.firstName }} {{ userProfile.lastName }}</p>
                <h4>Department</h4>
                <p>{{ userProfile.department }}</p>
                <h4></h4>
            </div>
            <div class="kontakt">
                <h3>Contact information</h3>
                <h4>Phone</h4>
                <p>{{ userProfile.phone }}</p>
                <h4>E-mail</h4>
                <p>{{ userProfile.email }}</p>
            </div>
            <div class="oppgaver">
                <h3>Roles</h3>
                <div v-for="value in userProfile.roles">
                    <strong>{{ value.name }}:</strong>
                    {{ value.description }}
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
img {
    width: 13rem;
    clip-path: circle(50%);
}
main {
    background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.oppgaver {
    max-width: 15rem;
}
h2 {
    font-size: xx-large;
    color: rgb(0, 8, 22);
}
h3 {
    text-decoration: underline;
    font-size: x-large;
    padding-bottom: 1rem;
    color: rgb(0, 8, 22);
}
h4 {
    font-size: larger;
    color: rgb(0, 8, 22);
}
p {
    background-color: aliceblue;
    padding: 0.5rem;
    color: rgb(0, 8, 22);
}
h5 {
    font-size: larger;
    color: rgb(0, 8, 22);
}
</style>