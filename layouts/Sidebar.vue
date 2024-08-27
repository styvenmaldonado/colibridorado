<template>
        <div class="w-96 bg-white shadow-lg h-full bg-gradient-to-r from-fuchsia-900 to-violet-950">
            <div class="flex flex-col gap-5 p-6 h-full">
              <div class="bg-white w-full h-40 rounded-lg shadow-lg flex mb-8">
                <img class="h-full p-3 object-cover mx-auto" src="/logo.webp" />
              </div>
              <div v-for="(r, index) in routes" :key="index">
                <NuxtLink :to="r.route">
                  <div class="flex gap-5 text-white font-bold hover:text-blue-900">
                    <span>
                      <div>
                        <v-icon>{{ r.icon }}</v-icon>
                      </div>
                    </span>
                    <span>{{ r.name }}</span>
                  </div>
                </NuxtLink>
              </div>
              <div class="mt-auto">
                <button>
                  <div class="flex gap-5 text-white font-bold hover:text-blue-900">
                    <span>
                      <div>
                        <v-icon>mdi-power</v-icon>
                      </div>
                    </span>
                    <span>Cerrar sesión</span>
                  </div>
                </button>
              </div>
            </div>
        </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
        routes: [
        {
          name: "Usuarios",
          icon: "mdi-account",
          route: "/users",
        },
        {
          name: "Pagos",
          icon: "mdi-credit-card-outline",
          route: "/payments",
        },
        {
          name: "Retiros y Ceremonias",
          icon: "mdi-calendar",
          route: "/events",
        },
        {
          name: "Roles",
          icon: "mdi-key",
          route: "/roles",
        },
        {
          name: "Configuración",
          icon: "mdi mdi-cog",
          route: "/settings",
        },
      ],
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
}
</script>