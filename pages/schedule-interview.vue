<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <div class="flex flex-col w-screen h-screen">
    <div class="h-44 lg:h-60 relative">
      <div class="absolute w-full h-full flex">
        <div class="flex w-28 h-28 lg:w-36 lg:h-36 rounded-full shadow-lg m-auto bg-white">
          <img class="m-auto h-24 w-24 lg:w-32 lg:h-32 object-cover" src="/logo.webp" />
        </div>
      </div>
      <img class="h-full w-full object-fill" src="/background.webp" />
    </div>
    <div
      class="bg-white pt-10 lg:pt-0 lg:m-auto lg:w-3/6  flex lg:rounded-lg lg:shadow-lg lg:border lg:border-gray-300">
      <div class="px-5 lg:w-11/12 lg:py-8 mx-auto">
        <h1 class="text-2xl text-violet-950 font-black">Agenda tu Entrevista</h1>
        <span>Selecciona un fecha y hora para realizar el proceso de entrevista</span>
      
      </div>
    </div>
  </div>
</template>
