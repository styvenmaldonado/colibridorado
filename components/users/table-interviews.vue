<script lang="ts">
  export default {
    data: () => ({
      itemsPerPage: 5,
      serverItems: [
    {
      isVerified: "Admitido",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      createdAt: "12 de Agosto de 2024",
    },
    {
      isVerified: "Admitido",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      createdAt: "12 de Agosto de 2024",
    },
  ],
      loading: false,
      totalItems: 0,
    }),
    methods: {
      loadItems () {
      
      },
    },
  }
</script>
<template>
    <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="[
      {
        title: 'Estado',
        align: 'start',
        sortable: false,
        key: 'isVerified',
      },
      
      { title: 'Descripción', key: 'description', align: 'center' },
      { title: 'Fecha', key: 'createdAt', align: 'end' },
    ]"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
  ></v-data-table-server>
</template>