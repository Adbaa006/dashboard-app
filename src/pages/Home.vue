<script setup>
import { userProfile, supportTickets } from '@/data/supportData';

console.log(userProfile)
console.log(supportTickets)
</script>

<template>
  <main class="main">
    <header>
      <h1>Velkommen, {{ userProfile.firstName }}</h1>
      <p>Rolle: {{ userProfile.role }}</p>
    </header>
    <div class="stats">
      <div class="stats1">
        <div class="headline">
          <h4>Tjent</h4>
          <img src="/Users/adbaa007/project/dashboard-app/src/images/tjent.svg" alt="">
        </div>
        <div class="number">
          <h2>739 000</h2>
        </div>
      </div>
      <div class="stats2">
        <div class="headline">
          <h4>Aktive kunder</h4>
          <img src="/Users/adbaa007/project/dashboard-app/src/images/kunder.svg" alt="">
        </div>
        <div class="number">
          <h2>2693</h2>
        </div>
      </div>
      <div class="stats3">
        <div class="headline">
          <h4>Problemer løst</h4>
          <img src="/Users/adbaa007/project/dashboard-app/src/images/problemer.svg" alt="">
        </div>
        <div class="number">
          <h2>173</h2>
        </div>
      </div>
      <div class="stats4">
        <div class="headline">
          <h4>Rating</h4>
          <img src="/Users/adbaa007/project/dashboard-app/src/images/rating.svg" alt="">
        </div>
        <div class="number">
          <h2>8.5</h2>
        </div>
      </div>
    </div>
    <div class="innhold">
      <div class="feilmeldinger">
        <h3>Åpne feilmeldinger:</h3>
        <ul>
          <li v-for="ticket in supportTickets.filter(t => t.status === 'Open')" :key="ticket.id">
            <strong>{{ ticket.customer }}</strong> - {{ ticket.subject }} ({{ ticket.priority }})

          </li>
        </ul>
      </div>
      <div class="blank">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis, eveniet illum quibusdam voluptas doloremque alias dolores ea autem architecto minima atque natus quasi laborum numquam obcaecati vitae beatae ut?</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  max-width: 2rem;
}
h2 {
  font-size: 50px;
  font-weight: 100;
}
h2,
h4 {
  color: antiquewhite;
}
</style>