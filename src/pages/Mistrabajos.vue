<template>
    <div class="allConteiner">
      <div class="card card-side bg-base-100 shadow-xl p-3">
  <figure>
    <img :src="RodriPerfil" class="w-full h-full object-cover max-w-20 max-h-96 sm:max-h-60" alt="Movie"/>
  </figure>
  <div class="card-body">
    <h2 class="card-title justify-center">Skull BarberShop</h2>
    <hr class="my-3 border-t border-gray-300">
    <p>Hola! Soy Rodrigo Gomez, barbero profesional, y estos, son algunos de mis trabajos</p>
  </div>
</div>

<div class="carousel rounded-box p-20 sm:p-5">
  <div class="carousel-item">
    <img :src="Corte1" alt="Corte1" class="w-80 h-70 object-cover rounded"/>
  </div>
  <div class="carousel-item">
    <img :src="Corte2" alt="Corte2" class="w-80 h-70 object-cover rounded"/>
  </div> 
  <div class="carousel-item">
    <img :src="Corte3" alt="Corte3" class="w-80 h-70 object-cover rounded"/>
  </div> 
</div>
    </div>
  </template>
  
  <script setup>  
  import RodriPerfil from "../assets/RodriCortando.jpg"
  import Corte1 from "../assets/Corte1.jpg"
  import Corte2 from "../assets/Corte2.jpg"
  import Corte3 from "../assets/Corte3.jpg"


  </script>