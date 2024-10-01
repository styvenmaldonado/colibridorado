<script setup lang="ts">
const route = useRoute()



</script>
<template>
    <div class="w-screen">
        <div class="h-96">
            <img class="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div class="px-5 py-8 flex flex-col gap-y-4">
            <span
                class="px-3 py-2 w-fit rounded-lg font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 text-white">Ceremonia</span>
            <h1 class="text-2xl font-bold">Frecuencia Cuántica del Amor</h1>
            <div class="flex gap-3">
                <v-icon class="text-violet-950">mdi-calendar-multiple</v-icon>
                <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
            </div>
            <div class="flex gap-3">
                <v-icon class="text-violet-950">mdi-map-marker-multiple</v-icon>
                <span>Rosal, Cundinamarca, Colombia</span>
            </div>
            <p>Bienvenido a Colibri Dorado, la medicina de la frecuencia cuántica del amor.

                Si sientes el llamado a expandir tu conciencia
                para recordar fragmentos de tu alma perdidos
                en tu historia de vida, en este espacio podrás
                Experimentar la sanción de tus experiencias, dolorosas, traumáticas y negativas que no te permiten
                avanzar a ser feliz.
            </p>

            <h3 class="text-violet-950 font-bold">Politica de Cancelacion</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="absolute top-0 left-0">
            <button class="h-14 w-14 rounded-full bg-white flex m-4">
                <v-icon class="m-auto">mdi-arrow-left</v-icon>
            </button>
        </div>
        <div class="fixed bottom-0 left-0 w-full">
            <button
                @click="navigateTo('/register-event?eventId=123')"
                class="w-full py-6 bg-gradient-to-r text-white font-bold text-lg from-fuchsia-900 to-violet-950">Resueno
                y me quiero inscribir</button>
        </div>
    </div>

</template>