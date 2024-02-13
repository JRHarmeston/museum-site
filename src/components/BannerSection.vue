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

<style lang="scss" src="../sass/main.scss"></style>
