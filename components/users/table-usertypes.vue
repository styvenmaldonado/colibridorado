<script lang="ts">


  export default {
    data: () => ({
      itemsPerPage: 5,
      headers: [
        {
          title: 'Id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
        {
          title: 'Tipo Usuario',
          align: 'start',
          sortable: false,
          key: 'usertype',
        },
      ],
      serverItems: [
    {
      id: "1",
      usertype: "Caminantes No Entrenad@s",
    },
    {
      id: "2",
      usertype: "Caminantes Entrenad@s",
    },
    {
      id: "3",
      usertype: "Caminantes Entrenamiento Especial",
    },
    {
      id: "3",
      usertype: "Caminantes Administrativo",
    },
    {
      id: "3",
      usertype: "Caminantes Logistica",
    },
    {
      id: "3",
      usertype: "Caminantes Acostad@s",
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
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
  ></v-data-table-server>
</template>