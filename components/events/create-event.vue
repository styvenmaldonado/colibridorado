<script lang="ts">
import { Amplify } from "aws-amplify";
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.


  data() {
    return {
      step: 1,
      items: [
        'Información Encuentro',
        'Imagenes',
        'Precios'
      ],
      name: "",
      location: "",
      datetime_start: "",
      datetime_end: "",
      description: "",
      photos: "",
      cancelPolicy: "",
      cost: "",
      type: ""
    }
  },
  methods: {
    async goTo(route: string) {
      await navigateTo({ path: route })
    },
    nextStep(){
      this.step++
    }
  }
}
</script>
<template>
  <div class="w-full h-full p-8 overflow-y-scroll flex">
    <div class="w-9/12 mx-auto">
      <div class="flex items-center pt-8 ">
        <div class="flex flex-col gap-3">
          <button @click="goTo('/events')" class="w-12"><v-icon size="large">mdi-arrow-left</v-icon></button>
          <h1 class="text-4xl font-bold">Nuevo Evento o Ceremonia</h1>
        </div>
      </div>
      <div class="py-8">
        <v-stepper alt-labels v-model="step" :items="items" hide-actions flat>
          <template v-slot:item.1>
            <v-form @submit.prevent="nextStep" class="pt-4 flex flex-col gap-4">
              <div>
                <div class="grid lg:grid-cols-2 gap-x-4">
                  <v-text-field type="datetime-local" :rules="[() => !!datetime_start || 'Campo requerido']" required
                    variant="outlined" v-model="datetime_start" label="Fecha y Hora de Inicio"></v-text-field>
                  <v-text-field type="datetime-local" :rules="[() => !!datetime_end || 'Campo requerido']" required
                    variant="outlined" v-model="datetime_end" label="Fecha y Hora de Finalización"></v-text-field>
                </div>
              </div>
              <div>
                <v-select variant="outlined" label="Tipo Evento" v-model="type"
                  :items="['Ceremonia', 'Retiro']"></v-select>
                <v-text-field :rules="[() => !!name || 'Campo requerido']" required variant="outlined" v-model="name"
                  label="Nombre"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-map-marker" :rules="[() => !!location || 'Campo requerido']"
                  required variant="outlined" v-model="location" label="Localización"></v-text-field>
                <v-textarea v-model="description" label="Descripción Retiro y/o Ceremonia"
                  variant="outlined"></v-textarea>
                <v-textarea v-model="cancelPolicy" label="Políticas de cancelación" variant="outlined"></v-textarea>
              </div>
              <button type="submit"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </v-form>
          </template>
          <template v-slot:item.2>
            <div class="pt-4">
              <v-file-input accept="image/*" counter multiple chips label="Imagenes" clearable
                variant="outlined"></v-file-input>
              <button @click="nextStep"
                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
            </div>
          </template>
          <template v-slot:item.3>
            <v-form @submit.prevent="step++" class="pt-4 flex flex-col gap-4">
              <div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminante No Entrenad@s"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminante Entrenad@s"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminantes Entrenamiento Especial"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminantes Administrativo"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminantes Logistica"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
                </div>
                <div class="grid lg:grid-cols-4 gap-x-4">
                  <v-text-field required  variant="outlined"  model-value="Caminantes Acostad@s"
                    label="Tipo Usuario"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100.000"
                    prefix="$ COP" variant="outlined" label="Peso Colombiano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ MXN" variant="outlined" label="Peso Mexicano"></v-text-field>
                  <v-text-field :rules="[() => !!datetime_end || 'Campo requerido']" required model- model-value="100"
                    prefix="$ USD" variant="outlined" label="Dolar"></v-text-field>
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