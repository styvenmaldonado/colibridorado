<script lang="ts">
import { client } from "~/libs/AmplifyDataClient";

export default {
  data: () => ({
    itemsPerPage: 5,
    serverItems: [],
    loading: false,
    totalItems: 0,
  }),
  methods: {
    async loadItems() {
      const { data } = await client.models.Payments.list();
      // @ts-ignore
      this.totalItems = data;
    },
  },
};
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="[
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'paymentId',
      },

      { title: 'Estado', key: 'status', align: 'center' },
      { title: 'Fecha', key: 'datetime', align: 'start' },
      { title: 'Valor', key: 'value', align: 'start' },
      { title: 'Medio de Pago', key: 'payment_method', align: 'start' },
    ]"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
  ></v-data-table-server>
</template>
