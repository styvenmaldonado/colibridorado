<script lang="ts">
export default {
  data: () => ({
    itemsPerPage: 5,
    serverItems: [
      {
        name: "JULIAN ALBERTO GONZALEZ",
        paymentId: "ecc2d72c-67b7-4b78-b3f0-04783c9f034e",
        status: "EXITOSA",
        datetime: "11/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "TRANSFERENCIA BANCARIA"
      },
      {
        name: "LUIS ALBERTO MALDONADO ",
        paymentId: "d6507d9c-1082-4749-966a-9c3e95fb2442",
        status: "EXITOSA",
        datetime: "12/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "EFECTIVO"
      },
      {
        name: "KAROL XIMENA GOMEZ GOMEZ",
        paymentId: "85098c4d-2855-40e3-a69f-12adb8e5d343",
        status: "RECHAZADA",
        datetime: "13/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "TRANSFERENCIA BANCARIA"
      },
      {
        name: "JULIAN ALBERTO GONZALEZ",
        paymentId: "ecc2d72c-67b7-4b78-b3f0-04783c9f034e",
        status: "EXITOSA",
        datetime: "11/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "TRANSFERENCIA BANCARIA"
      },
      {
        name: "LUIS ALBERTO MALDONADO ",
        paymentId: "d6507d9c-1082-4749-966a-9c3e95fb2442",
        status: "EXITOSA",
        datetime: "12/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "EFECTIVO"
      },
      {
        name: "KAROL XIMENA GOMEZ GOMEZ",
        paymentId: "85098c4d-2855-40e3-a69f-12adb8e5d343",
        status: "RECHAZADA",
        datetime: "13/08/2024 11:54 p.m",
        value: "$133,000",
        payment_method: "TRANSFERENCIA BANCARIA"
      },
    ],
    loading: false,
    totalItems: 0,
  }),
  methods: {
    loadItems() {

    },
  },
}
</script>
<template>
  <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="[
    {
      title: 'Id',
      align: 'start',
      sortable: false,
      key: 'paymentId',
    },
    { title: 'Nombre', key: 'name', align: 'start' },
    { title: 'Estado', key: 'status', align: 'center' },
    { title: 'Fecha', key: 'datetime', align: 'start' },
    { title: 'Valor', key: 'value', align: 'start' },
    { title: 'Medio de Pago', key: 'payment_method', align: 'start' },
  ]" :items="serverItems" :items-length="totalItems" :loading="loading" item-value="name"
    @update:options="loadItems"></v-data-table-server>
</template>