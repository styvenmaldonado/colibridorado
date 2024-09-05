<script lang="ts">
export default {
  data: () => ({
    itemsPerPage: 5,
    serverItems: [
      {
        name: 'Ceremonia de Colibri Dorado',
        type: 'Ceremonia',
        location: 'Rosal - Cundinamarca',
        datetime_start: '30 de Agosto de 2024'
      },
      {
        name: 'Retiro de Colibri Dorado',
        type: 'Retiro',
        location: 'Rosal - Cundinamarca',
        datetime_start: '30 de Agosto de 2024'
      },
      {
        name: 'Retiro de Colibri Dorado 2',
        type: 'Ceremonia',
        location: 'Rosal - Cundinamarca',
        datetime_start: '30 de Agosto de 2024'
      },
    ],
    loading: false,
    totalItems: 0,
  }),
  methods: {
    loadItems() {

    },
    async handleClick(_row: any) {
      await navigateTo("/events/detail/12345" )
    }
  },
}
</script>
<template>
  <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="[
    {
      title: 'Evento y/o Ceremonia',
      align: 'start',
      sortable: false,
      key: 'name',
    },

    { title: 'Tipo', key: 'type', align: 'end' },
    { title: 'Ubicación', key: 'location', align: 'end' },
    { title: 'Fecha', key: 'datetime_start', align: 'end' },
  ]" :items="serverItems" :items-length="totalItems" :loading="loading" item-value="name" @update:options="loadItems"
    @click:row="handleClick"></v-data-table-server>
</template>