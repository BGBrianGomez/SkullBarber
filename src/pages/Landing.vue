<template>
  <div>
    <div class="bg-center relative" :style="{ height: isMobile ? '92vh' : '88vh', backgroundColor: 'rgb(0, 0, 0)' }">
      <img :src="Fondo" alt="Fondo" class="h-full w-full blur-image">
    </div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :style="{ height: isMobile ? '30vh' : '60vh' }">
      <img :src="Logo" alt="Logo" class="h-full w-full">
    </div>
  </div>
</template>

<script setup>

import LogoRodri from "../assets/LOGORODRISINFONDO.png";
import Fondo1 from "../assets/PruebaFondo.jpg";

const Fondo = Fondo1;
const Logo = LogoRodri;
const isMobile = window.innerWidth <= 768;

</script>

<style>
.blur-image {
  filter: blur(5px);
}
</style>
