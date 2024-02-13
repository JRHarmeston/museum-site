<template>
  <header class="banner">
    <div class="banner__grid">
      <div class="banner__logo-container">
        <img
          src="/images/nhmlogo.png"
          alt="National History Museum Logo"
          class="banner__logo"
        />
      </div>
      <div class="banner__search-group">
        <input type="text" placeholder="Search" class="banner__search-bar" />
        <button class="banner__membership-button">Membership</button>
        <button class="banner__donate-button">Donate</button>
      </div>
      <nav class="banner__nav">
        <ul class="banner__menu">
          <li><a href="#">Visit</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Take part</a></li>
          <li><a href="#">Join and support</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Schools</a></li>
          <li><a href="#">Our science</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.banner {
  background-color: #f8f8f8;
  margin: -15px;
  border-bottom: 1px solid #cccccc;
}

.banner__grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.banner__logo-container {
  grid-row: 1 / span 2;
}

.banner__logo {
  max-height: 80px;
  object-fit: contain;
  padding: 1rem;
}

.banner__search-group {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.banner__search-bar {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.banner__membership-button,
.banner__donate-button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.banner__membership-button {
  background-color: #e6e6e6;
  color: #333;
}

.banner__donate-button {
  background-color: #ffd320;
  color: #333;
}

.banner__nav {
  grid-column: 2 / 3;
}

.banner__menu {
  font-family: "Helvetica", sans-serif;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  gap: 1rem;
  margin: 0;
  justify-content: flex-end;
}

.banner__menu li {
  padding: 0.5rem 1rem;
}

.banner__menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
