<script lang="ts">
  export default {
    data: () => ({
      itemsPerPage: 5,
      serverItems: [
        {
          givenName: "MARIO ALBERTO",
          familyName:"GONZALEZ GUITIERREZ",
          tipo_documento: "CC",
          numero_documento: "104345467",
          phone: "314454354",
          email:"email@miemail.com"
        },
        {
          givenName: "CLARA XIMENA",
          familyName:"PEREZ GUITIERREZ",
          tipo_documento: "CC",
          numero_documento: "1045098876",
          phone: "314454354",
          email:"email@miemail.com"
        },
        {
          givenName: "CARLOS JULIAN",
          familyName:"GONZALEZ GONZALEZ",
          tipo_documento: "CC",
          numero_documento: "104345467",
          phone: "314454354",
          email:"email@miemail.com"
        },
        {
          givenName: "HELBERT ",
          familyName:"RODRIGUEZ GUTIERREZ",
          tipo_documento: "CC",
          numero_documento: "104345467",
          phone: "314454354",
          email:"email@miemail.com"
        },
        {
          givenName: "JOSE ROBERTO",
          familyName:"ROJAS GUIERREZ",
          tipo_documento: "CC",
          numero_documento: "104345467",
          phone: "314454354",
          email:"email@miemail.com"
        },

      ],
      loading: false,
      totalItems: 0,
    }),
    methods: {
      async loadItems () {

      },
      async handleClick(_row: any){
        await navigateTo({ path: "/users/detail/1235"})
      }
    },
  }
</script>
<template>
    <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="[
      {
        title: 'Nombres',
        align: 'start',
        sortable: false,
        key: 'givenName',
      },
      {
        title: 'Apellidos',
        align: 'start',
        sortable: false,
        key: 'familyName',
      },
      { title: 'Tipo Documento', key: 'tipo_documento', align: 'end' },
      { title: 'Numero Documento', key: 'numero_documento', align: 'end' },
      { title: 'Telefono', key: 'phone', align: 'end' },
      { title: 'Email', key: 'email', align: 'end' },
    ]"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
    @click:row="handleClick"
  ></v-data-table-server>
</template>