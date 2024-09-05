<script lang="ts">
import { Amplify } from "aws-amplify";
import outputs from '../amplify_outputs.json';
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
      step: 1,
      items: [
        'Información personal',
        'Email y Contraseña'
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
      confirmPassword: ""
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { userId, isSignUpComplete, nextStep } = await signUp({
          username: this.email,
          password: this.password,
          options: {
            userAttributes: {
              phone_number: "+" + this.phone, // E.164 number convention
              given_name: this.givenName,
              family_name: this.familyName,
              birthdate: this.birthdate,
              address: this.address,
              "custom:tipo_documento": this.tipo_documento,
              "custom:numero_documento": this.numero_documento
            },
          }
        });
        nextStep.signUpStep == "CONFIRM_SIGN_UP" && await navigateTo({ path: '/OTP', query: { email: this.email } });
      } catch (error) {
        console.log(error)
      }
    }
  }
}


</script>
<template>
  <div class="flex flex-col w-screen h-screen">
    <div class="h-44 lg:h-60 relative">
      <div class="absolute w-full h-full flex">
        <div class="flex w-28 h-28 lg:w-36 lg:h-36 rounded-full shadow-lg m-auto bg-white">
          <img class="m-auto h-24 w-24 lg:w-32 lg:h-32 object-cover" src="/logo.webp" />
        </div>
      </div>
      <img class="h-full w-full object-fill" src="/background.webp" />
    </div>
    <div
      class="bg-white pt-10 lg:pt-0 lg:m-auto lg:w-3/6  flex lg:rounded-lg lg:shadow-lg lg:border lg:border-gray-300">
      <div class="px-5 lg:w-11/12 lg:py-8 mx-auto">
        <h1 class="text-2xl text-violet-950 font-black">Crea tu cuenta</h1>
        <span>Crea tu cuenta en 2 pasos. Llena estos datos sólo una vez y ya quedarás registrad@ en la
          plataforma.</span>
        <v-stepper alt-labels v-model="step" :items="items" hide-actions flat>
          <template v-slot:item.1>
            <v-form z @submit.prevent="step++" class="pt-4 flex flex-col">
              <v-text-field :rules="[() => !!givenName || 'Campo requerido']" required variant="outlined"
                v-model="givenName" label="Nombres"></v-text-field>
              <v-text-field :rules="[() => !!familyName || 'Campo requerido']" required variant="outlined"
                v-model="familyName" label="Apellidos"></v-text-field>
              <v-select variant="outlined" label="Tipo Documento" v-model="tipo_documento" :items="t_doc"></v-select>
              <v-text-field :rules="[() => !!numero_documento || 'Campo requerido']" required variant="outlined"
                v-model="numero_documento" label=" Número de documento"></v-text-field>
              <v-text-field :rules="[() => !!birthdate || 'Campo requerido']" required variant="outlined"
                v-model="birthdate" label="Fecha de Nacimiento" type="date"></v-text-field>
              <v-text-field :rules="[() => !!phone || 'Campo requerido']" required
                prepend-inner-icon="mdi-phone-in-talk" variant="outlined" v-model="phone" label="Teléfono"
                type="tel"></v-text-field>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label="Dirección"></v-text-field>
              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </v-form>
          </template>
          <template v-slot:item.2>
            <v-form @submit.prevent="onSubmit" class="pt-4 flex flex-col">

              <v-text-field :rules="[() => !!email || 'Campo requerido']" required prepend-inner-icon="mdi-email"
                variant="outlined" v-model="email" label="Email" type="email"></v-text-field>
              <v-text-field :rules="[() => !!password || 'Campo requerido']" required prepend-inner-icon="mdi-lock"
                variant="outlined" v-model="password" label="Contraseña" type="password"></v-text-field>
              <v-text-field :rules="[() => password == confirmPassword || 'Contraseña no coincide']" required
                prepend-inner-icon="mdi-lock" variant="outlined" v-model="confirmPassword" label="Confirma Contraseña"
                type="password"></v-text-field>
              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Crear
                Cuenta</button>
            </v-form>
          </template>
        </v-stepper>
      </div>
    </div>
  </div>
</template>
