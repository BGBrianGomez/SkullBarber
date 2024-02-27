<script setup>
import LogoRodri from "../assets/LogoRodri.png"
const logo = LogoRodri;
</script>


<template>
  <div class="navbar bg-white border-b border-black">
  <div class="flex-1">
    <a href="/">
      <img :src="logo" alt="logoRodri" class="h-12 w-auto ml-4">
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 text-black">
      <li><router-link to="/Mistrabajos">Mis trabajos</router-link></li>
      <li><router-link to="/Estilos">Estilos</router-link></li>
    </ul>
  </div>
    </div>
</template>
