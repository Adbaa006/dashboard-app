<template>
  <aside class="sidebar">
    <div class="profile">
      <img src="/avatar.svg" alt="User" />
      <h3>John Don</h3>
      <p>john@company.com</p>
    </div>
    <nav>
      <ul>
        <a href=""></a>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  background: #0b234a;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 0.75rem 0;
  cursor: pointer;
}
.profile {
  text-align: center;
  margin-bottom: 2rem;
}
.profile img {
  width: 60px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>
