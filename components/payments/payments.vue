<script setup lang="ts">

</script>
<template>
    <div class="w-full h-full p-8 overflow-y-scroll">
        <div class="py-8">
            <div>
                <div class="flex items-center pt-8">
                    <div>
                        <h1 class="text-4xl font-bold">Pagos</h1>
                    </div>
                    <div class="ml-auto">
                        <button @click="navigateTo('/users/createPayment')"
                            class="px-5 font-bold rounded-lg py-3 bg-gradient-to-r from-fuchsia-900 to-violet-950 text-white">+
                            Nuevo Pago</button>
                    </div>
                </div>
            </div>
            <div class="py-4 flex gap-2">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
                <v-select label="Tipo Usuario" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-select>
            </div>
            <main-table-payments/>
        </div>
    </div>
</template>