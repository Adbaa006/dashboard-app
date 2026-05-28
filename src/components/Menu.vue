<script setup>
import { userProfile } from '@/data/supportData';

console.log(userProfile)
</script>

<template>
    <aside class="menu">
      <div class="bruker">
        <h3>{{ userProfile.firstName }} {{ userProfile.lastName }}</h3>
        <p>{{ userProfile.email }}</p>
      </div>
      <nav class=" menyikoner">
        <div class="hjem">
          <img src="..images/hjem.svg" alt="">
          <router-link to="/">Home</router-link>
        </div>
        <div class="stotte">
          <img src="..images/service.svg" alt="">
          <router-link to="/support">Support</router-link>
        </div>
        <div class="logget_inn">
          <img src="..images/profil2.svg" alt="">
          <router-link to="/profil">Profile</router-link>
        </div>
      </nav>
    </aside>
</template>

<style scoped>
img {
  max-width: 3rem;
}
h3,
p {
  color: whitesmoke;
}
</style>