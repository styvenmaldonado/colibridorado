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
        'Indicaciones Medicas',
        'Transporte',
        'Pago'
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
        <h1 class="text-2xl text-violet-950 font-black">Resueno y me quiero inscribir</h1>
        <span>Diligencia los datos e inscríbete</span>
        <v-stepper alt-labels v-model="step" :items="items" hide-actions flat>
          <template v-slot:item.1>
            <v-form z @submit.prevent="step++" class="pt-4 flex flex-col">
              <p class="font-bold">¿Has sido referido/a por alguien?¿Quién? Esa persona es tu terapeuta?</p>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label=""></v-text-field>
              <p class="font-bold">¿Has sido referido/a por alguien?¿Quién? Esa persona es tu terapeuta?</p>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label=""></v-text-field>
              <p class="font-bold">Actualmente presentas alguna condición especial de salud?</p>
              <p>Renales, cardiacas, epilepsia, diagnostico psiquiátrico, embarazo,lactancia, otra ¿Cuál? (Esto será
                tenido en cuenta para tu admisión a la ceremonia)</p>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label=""></v-text-field>
              <p class="font-bold">Actualmente tomas algún medicamento? ¿Cuál? Con qué regularidad? </p>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label=""></v-text-field>

              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </v-form>
          </template>
          <template v-slot:item.2>
            <v-form @submit.prevent="onSubmit" class="pt-4 flex flex-col">
              <p class="font-bold">¿Necesita transporte? </p>
              <v-select  :items="['Si', 'No']" variant="outlined"></v-select>
              <p class="font-bold">¿Tienes disponibilidad de Cupos de Transporte? </p>
              <v-select  :items="['Si', 'No']" variant="outlined"></v-select>
              <p class="font-bold">Asientos disponibles</p>
              <v-text-field :rules="[() => !!address || 'Campo requerido']" required variant="outlined"
                v-model="address" label=""></v-text-field>
             
              <button type="submit" 
                @click="step++"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </v-form>
          </template>
          <template v-slot:item.3>
            <v-form @submit.prevent="onSubmit" class="pt-4 flex flex-col gap-6">
              <p>Reliza tu pago en 3 simples pago</p>
              <div class="flex flex-col gap-2">
                <div class="bg-violet-950 rounded-full h-12 w-12 text-white font-bold flex">
                  <span class="m-auto">1</span>
                </div>
                <p>Realizar el Abono Virtual para separar tu cupo</p>
              </div>

              <div class="flex flex-col gap-2">
                <div class="bg-violet-950 rounded-full h-12 w-12 text-white font-bold flex">
                  <span class="m-auto">2</span>
                </div>
                <p>Agenda día, hora y asiste a la Ceremonia.</p>
              </div>

              <div class="flex flex-col gap-2">
                <div class="bg-violet-950 rounded-full h-12 w-12 text-white font-bold flex">
                  <span class="m-auto">3</span>
                </div>
                <p>Termina de Pagar. Lleva el saldo del valor de la Ceremonia en efectivo.</p>
              </div>
             
              <button type="submit" 
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Realizar Pago</button>
            </v-form>
          </template>
        </v-stepper>
      </div>
    </div>
  </div>
</template>
