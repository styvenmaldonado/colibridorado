<script lang="ts">
export default {
    data: () => ({
        tab: "users"
    }),
    goTo: async (route:string) => (
        await navigateTo({path: route})
    )
}
</script>
<template>
    <div class="w-full h-full p-8 overflow-y-scroll">
        <div class="py-8">
            <button @click="goTo('/users')" class="w-10 my-5"><v-icon size="large">mdi-arrow-left</v-icon></button>
            <div class="flex items-center pb-8">
                <div class="grid text-lg">
                    <h1 class="text-4xl font-bold p">MICHAEL STYVEN MALDONADO CISNERO</h1>
                    <span>CC - Cédula de Ciudadanía</span>
                    <span>No. Documento 1018476758</span>
                    <span>29 Años</span>
                </div>
                <div class="ml-auto">
                    <button @click="goTo('/users/create')"
                        class="px-5 font-bold rounded-lg py-3 bg-gradient-to-r from-fuchsia-900 to-violet-950 text-white">+
                        Editar Informacion</button>
                </div>
            </div>
            <v-tabs v-model="tab" bg-color="white" slider-color="deep-purple-darken-4" color="deep-purple-darken-4">
                <v-tab :value="info">Información personal</v-tab>
                <v-tab :value="interviews">Entrevistas</v-tab>
                <v-tab :value="event">Ceremonias y Retiros</v-tab>
                <v-tab :value="payments">Pagos</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="info">
                    <info-user/>
                </v-tabs-window-item>
                <v-tabs-window-item value="interviews">
                    <interviews-tab />
                </v-tabs-window-item>
                <v-tabs-window-item value="event">
                    <events-tab />
                </v-tabs-window-item>
                <v-tabs-window-item value="payments">
                    <payments-tab />
                </v-tabs-window-item>
            </v-tabs-window>
        </div>
    </div>
</template>