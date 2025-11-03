<template>
  <div class="navbar bg-base-100 shadow-xl rounded-box">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl"
        >Dashboard</RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><RouterLink to="/support">Support</RouterLink></li>
        <li><RouterLink to="/profil">Profil</RouterLink></li>
      </ul>
    </div>
  </div>
</template>