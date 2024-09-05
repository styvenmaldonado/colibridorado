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
      class="bg-white pt-10 lg:pt-0 lg:m-auto lg:w-3/6 flex flex-col lg:rounded-lg lg:shadow-lg lg:border lg:border-gray-300"
      >
      <div class="px-5 lg:w-11/12 lg:py-8 mx-auto " style="width: -webkit-fill-available;">
        <div class="text-lg">
          <span class="font-bold">Bienllegad@</span> <span class="font-bold text-violet-950">Cristian 🥳</span>
          <p>a la Familia Colibrí Dorado, un espacio de sanación desde la frecuencia cuántica del amor.

            Gracias por unirte a esta tribu de Amor y consciencia en movimiento.
          </p>
        </div>
        <div class="text-lg pt-6">
          <span class="font-bold"></span> <span class="font-bold text-violet-950">Ceremonias y Retiros</span>
          <p>Conoce las próximas Ceremonias y Retiros. Estás invitad@ a encontrarte con lo profundo de tu Ser en cada
            espacio.
          </p>
        </div>
      </div>
      <div class="text-lg pt-8 px-5">
        <span class="font-bold text-violet-950">Ceremonia</span> 
      </div>
      <div class="overflow-hidden">
        <div class="flex overflow-x-auto gap-4 pl-4">
          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>

          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>
          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>
        </div>
      </div>
      <div class="text-lg pt-8 px-5">
        <span class="font-bold text-violet-950">Retiros</span> 
      </div>
      <div class="overflow-hidden">
        <div class="flex overflow-x-auto gap-4 pl-4">

          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>
          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>
          <a href="/event/123" class="card py-4 w-60 flex-shrink-0">
            <div class="h-32 w-full">
              <img class="w-full h-full rounded-lg object-fit"
                src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div class="grid pt-2">
              <span class="font-bold">Colibri Dorado</span>
              <span>Sábado, 31 de Agosto de 2024 4:00 pm (GMT-5)</span>
              <span>Rosal, Cundinamarca, Colombia</span>
            </div>
          </a>
        </div>
      </div>


    </div>
  </div>
</template>
