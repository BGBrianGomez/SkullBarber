<template>
  <div>
    <div class="flex justify-center items-center mt-20 sm:mt-10">
      <div class="mr-5">
        <button v-if="toShow > 0" class="join-item btn hidden sm:block" @click="navigateCarousel(-1)">«</button> 
      </div>
      <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box sm:w-60" style=" height: 50vh;" ref="carousel">
        <div id="0" class="carousel-item">
          <img :src="Estilos1" class="rounded-box w-full" alt="Estilos1"/>
        </div> 
        <div id="1" class="carousel-item">
          <img :src="Estilos2" class="rounded-box w-full" alt="Estilos2"/>
        </div> 
        <div id="2" class="carousel-item">
          <img :src="Estilos3" class="rounded-box w-full" alt="Estilos3"/>
        </div> 
        <div id="3" class="carousel-item">
          <img :src="Estilos4" class="rounded-box w-full" alt="Estilos4"/>
        </div> 
      </div>
      <div class="ml-5">
        <button v-if="toShow < 3" class="join-item btn hidden sm:block" @click="navigateCarousel(1)">»</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Estilos1 from "../assets/Estilos1.jpg"
import Estilos2 from "../assets/Estilos2.jpg"
import Estilos3 from "../assets/Estilos3.jpg"
import Estilos4 from "../assets/Estilos4.jpg"

const toShow = ref(0);

const navigateCarousel = (direction) => {
  toShow.value += direction;

  const carouselItem = document.getElementById(toShow.value.toString());
  if (carouselItem) {
    carouselItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return true;
  }
};

onMounted(() => {
  navigateCarousel(toShow.value);
  return true;
});
</script>
