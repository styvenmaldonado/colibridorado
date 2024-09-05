<script lang="ts">
import { Amplify } from "aws-amplify";
import outputs from '../../amplify_outputs.json';
import { signUp } from "aws-amplify/auth"

Amplify.configure(outputs);
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.


  data() {
    return {
      t_doc: [
        'CC - Cédula de Ciudadanía',
        'CE - Cédula de extranjería',
        'PA - Pasaporte',
        'TI - Tarjeta de Identidad',
        'CD - Carnet Diplomático',
        'PEP - Permiso Especial de Permanencia'
      ],
      userTypesList: [
        'Caminantes No Entrenad@s',
        'Caminantes Entrenad@s',
        'Caminantes Entrenamiento Especial',
        'Caminantes Administrativo',
        'Caminantes Logistica',
        'Caminantes Acostad@s'
      ],
      givenName: "",
      familyName: "",
      tipo_documento: "",
      numero_documento: "",
      birthdate: "",
      address: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      rol: "",
      userType: ""
    }
  },
  methods: {
    async goTo(route: string) {
      await navigateTo({ path: route })
    }
  }
}
</script>
<template>
  <div class="w-full h-full p-8 overflow-y-scroll flex">
    <div class="w-9/12 mx-auto">
      <div class="flex items-center pt-8 ">
        <div class="flex flex-col gap-3">
          <button @click="goTo('/users')" class="w-12"><v-icon size="large">mdi-arrow-left</v-icon></button>
          <h1 class="text-4xl font-bold">Nuevo Usuario</h1>
        </div>
      </div>
      <div class="py-8">
        <v-form z @submit.prevent="step++" class="pt-4 flex flex-col gap-4">
          <div>
            <h4 class="font-bold text-2xl pb-4">Información personal</h4>
            <div class="grid lg:grid-cols-2 gap-x-4">
              <v-text-field :rules="[() => !!givenName || 'Campo requerido']" required variant="outlined"
                v-model="givenName" label="Nombres"></v-text-field>
              <v-text-field :rules="[() => !!familyName || 'Campo requerido']" required variant="outlined"
                v-model="familyName" label="Apellidos"></v-text-field>
              <v-select variant="outlined" label="Tipo Documento" v-model="tipo_documento" :items="t_doc"></v-select>
              <v-text-field :rules="[() => !!numero_documento || 'Campo requerido']" required variant="outlined"
                v-model="numero_documento" label=" Número de documento"></v-text-field>
              <v-text-field :rules="[() => !!birthdate || 'Campo requerido']" required variant="outlined"
                v-model="birthdate" label="Fecha de Nacimiento" type="date"></v-text-field>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label="Dirección"></v-text-field>
              <v-text-field :rules="[() => !!phone || 'Campo requerido']" required
                prepend-inner-icon="mdi-phone-in-talk" variant="outlined" v-model="phone" label="Teléfono"
                type="tel"></v-text-field>
              <v-text-field :rules="[() => !!email || 'Campo requerido']" required prepend-inner-icon="mdi-email"
                variant="outlined" v-model="email" label="Email" type="email"></v-text-field>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-2xl pb-4">Información adicional</h4>
            <div class="grid lg:grid-cols-2 gap-x-4">
              <v-select variant="outlined" label="Rol" v-model="rol"
                :items="['SUPER ADMIN', 'ADMIN']"></v-select>
              <v-select variant="outlined" label="Tipo Usuario" v-model="userType" :items="userTypesList"></v-select>
              
            </div>
          </div>


          <button type="submit"
            class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Guardar</button>
        </v-form>
      </div>
    </div>
  </div>
</template>