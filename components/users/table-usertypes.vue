<script lang="ts">
import { client } from '~/libs/AmplifyDataClient';



  export default {
    data: () => ({
      itemsPerPage: 5,
      serverItems: [],
      loading: true,
      totalItems: 0,
    }),
    methods: {
      async loadItems () {
        const { data } = await client.models.UsersTypes.list();
        // @ts-ignore: serverItems never[]
        this.serverItems.push(...data)
        this.loading = false
      },
    },
  }
</script>
<template>
    <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="[
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
        key: 'name',
      },
    ]"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
  ></v-data-table-server>
</template>