<script lang="ts">
import { Amplify } from "aws-amplify";
import outputs from '../../amplify_outputs.json';
import { confirmResetPassword, resetPassword } from 'aws-amplify/auth';
import { confirmSignUp } from 'aws-amplify/auth'

Amplify.configure(outputs);
export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.

    data() {
        return {
            code: "",
            email: "",
            password: "",
            confirmPassword: "",
            step: 1
        }
    },
    methods: {
        async step1() {
            const { nextStep } = await resetPassword({
                username: this.email
            })
            if (nextStep.resetPasswordStep == "CONFIRM_RESET_PASSWORD_WITH_CODE") {
                this.step = 2
            }
        },
        async step2() {
            this.step = 3
        },
        async step3() {
            await confirmResetPassword({
                username: this.email,
                confirmationCode: this.code,
                newPassword: this.password,
            });
            await navigateTo("/login")
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

                <v-stepper v-model="step" alt-labels hide-actions flat
                    :items="['Email', 'Código de verificación', 'Nueva Contraseña']">
                    <template v-slot:item.1>
                        <h1 class="text-2xl text-violet-950 font-black">¿Olvidaste tu contraseña?</h1>
                        <span>Indicanos cuál es tu correo electrónico; te enviaremos un código de verificación,
                            diligencialo y
                            restaura tu cuenta.</span>
                        <v-form @submit.prevent="step1" class="pt-4 flex flex-col">
                            <v-text-field :rules="[() => !!email || 'Campo requerido']" required
                                prepend-inner-icon="mdi-email" variant="outlined" v-model="email" label="Email"
                                type="email"></v-text-field>
                            <button type="submit"
                                class="w-full py-4 text-white font-bold bg-gradient-to-r from-fuchsia-900 to-violet-950 rounded-lg">Siguiente</button>
                        </v-form>
                    </template>
                    <template v-slot:item.2>
                        <h1 class="text-2xl text-violet-950 font-black">Verificación OTP</h1>
                        <span>Bienllegad@ a la Familia Colibrí Dorado, un espacio de sanación desde la frecuencia
                            cuántica del amor.
                        </span>
                        <v-form @submit.prevent="step2" class="pt-4 flex flex-col">
                            <div class="py-6">
                                <v-otp-input v-model="code" focus-all :length="6"></v-otp-input>
                            </div>
                            <button @click="step++" color="surface-variant" text="Submit" variant="tonal"
                                class="bg-gradient-to-r from-fuchsia-900 to-violet-950 text-white font-bold py-4 w-full rounded-lg">Enviar</button>
                        </v-form>
                    </template>
                    <template v-slot:item.3>
                        <h1 class="text-2xl text-violet-950 font-black">Nueva Contraseña</h1>
                        <span>Bienllegad@ a la Familia Colibrí Dorado, un espacio de sanación desde la frecuencia
                            cuántica del amor.
                        </span>
                        <v-form @submit.prevent="step3">
                            <div class="py-4">
                                <v-text-field :rules="[() => !!password || 'Campo requerido']" required
                                    prepend-inner-icon="mdi-lock" variant="outlined" v-model="password" label="Contraseña"
                                    type="password"></v-text-field>
                                <v-text-field :rules="[() => password == confirmPassword || 'Contraseña no coincide']"
                                    required prepend-inner-icon="mdi-lock" variant="outlined" v-model="confirmPassword"
                                    label="Confirma Contraseña" type="password"></v-text-field>
                            </div>
                            <button type="submit" color="surface-variant" text="Submit" variant="tonal"
                                class="bg-gradient-to-r from-fuchsia-900 to-violet-950 text-white font-bold py-4 w-full rounded-lg">Enviar</button>
                        </v-form>
                    </template>
                </v-stepper>

            </div>
        </div>
    </div>
</template>
