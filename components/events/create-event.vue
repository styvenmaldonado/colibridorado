<script setup lang="ts">
import { client } from '~/libs/AmplifyDataClient';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

//Types 
import type { SubmitEventPromise } from 'vuetify';
import type { EventInteface } from '~/inteface/EventInterface';


//Amplify
import { Amplify } from "aws-amplify";
import outputs from '../../amplify_outputs.json';
Amplify.configure(outputs);


const { data: usersTypes, status } = await useAsyncData('usersTypes', async () => {
  const { data } = await client.models.UsersTypes.list()
  return data
})

const step = ref(2)
const files = ref([])
const loading = (false)
const data: EventInteface = reactive({
  photos: [],
  images: [],
  cost: usersTypes.value?.map(c => ({ id: c.id, userType: c.name, usd: 0, cop: 0, mxn: 0 })),
})

const nextStep = async (event: SubmitEventPromise) => {
  const { valid } = await event;
  if (!valid) return
  step.value++
}

const submitPhotos = (photos:string[]) => {
    data.photos = photos
    step.value++
}

const saveEvent = async () => {
  await client.models.Events.create({ eventId: uuidv4(), ...data })
}

</script>
<template>
  <div v-if="status == 'pending'" style="z-index:9999" class="fixed w-screen h-screen bg-gray-600 opacity-45 flex">
    <div class="m-auto"><v-progress-circular indeterminate :size="76"></v-progress-circular></div>
  </div>
  <div class="w-full h-full p-8 overflow-y-scroll flex">
    <div class="w-9/12 mx-auto">
      <div class="flex items-center pt-8 ">
        <div class="flex flex-col gap-3">
          <button @click="navigateTo('/events')" class="w-12"><v-icon size="large">mdi-arrow-left</v-icon></button>
          <h1 class="text-4xl font-bold">Nuevo Evento o Ceremonia</h1>
        </div>
      </div>
      <div class="py-8">
        <v-stepper alt-labels v-model="step" :items="[
          'Información Encuentro',
          'Imagenes',
          'Precios'
        ]" hide-actions flat>
          <template v-slot:item.1>
            <v-form @submit.prevent="nextStep" class="pt-4 flex flex-col gap-4">
              <div>
                <div class="grid lg:grid-cols-2 gap-x-4">
                  <v-text-field v-model="data.datetime_start" type="datetime-local"
                    :rules="[() => !!data.datetime_start || 'Campo requerido']" required variant="outlined"
                    label="Fecha y Hora de Inicio"></v-text-field>
                  <v-text-field type="datetime-local" :rules="[() => !!data.datetime_end || 'Campo requerido']" required
                    variant="outlined" v-model="data.datetime_end" label="Fecha y Hora de Finalización"></v-text-field>
                </div>
              </div>
              <div>
                <v-select variant="outlined" label="Tipo Evento" v-model="data.type"
                  :items="['Ceremonia', 'Retiro']"></v-select>
                <v-text-field :rules="[() => !!data.name || 'Campo requerido']" required variant="outlined"
                  v-model="data.name" label="Nombre"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-map-marker" :rules="[() => !!data.location || 'Campo requerido']"
                  required variant="outlined" v-model="data.location" label="Localización"></v-text-field>
                <v-textarea v-model="data.description" label="Descripción Retiro y/o Ceremonia"
                  variant="outlined"></v-textarea>
                <v-textarea v-model="data.cancelPolicy" label="Políticas de cancelación"
                  variant="outlined"></v-textarea>
              </div>
              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </v-form>
          </template>
          <template v-slot:item.2>
            <div class="py-4">
              <dropzone @submit="submitPhotos"  />
            </div>
            <button @click="step++" v-if="files.length"
              class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
          </template>
          <template v-slot:item.3>
            {{ data }}
            <v-form @submit.prevent="nextStep" class="pt-4 flex flex-col gap-4">
              <div v-for="(c, index) in data.cost" class="border border-gray-200 rounded-lg px-4 py-4">
                <div>
                  <v-text-field v-model="c.userType" required variant="outlined" label="Tipo Usuario"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-3 gap-x-4">
                  <v-text-field v-model="c.cop" :rules="[() => !!c.cop || 'Campo requerido']" required model-
                    placeholder="100" prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field v-model="c.mxn" :rules="[() => !!c.mxn || 'Campo requerido']" required model-
                    placeholder="100" prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field v-model="c.usd" :rules="[() => !!c.usd || 'Campo requerido']" required model-
                    placeholder="100" prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
              </div>
              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Finalizar</button>
            </v-form>
          </template>
        </v-stepper>
      </div>
    </div>
  </div>
</template>