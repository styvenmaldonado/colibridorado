// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    // '@sidebase/nuxt-auth',
  ],
  // devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    authSecret: process.env.NUXT_NEXTAUTH_SECRET,
  },
  // auth: {
  //   isEnabled: true,
  //   disableServerSideAuth: false,
  //   originEnvKey: 'AUTH_ORIGIN',
  //   baseURL: process.env.NUXT_NEXTAUTH_URL,
  //   sessionRefresh: {
  //     enablePeriodically: true,
  //     enableOnWindowFocus: true,
  //   },
  //   provider: {
  //     type: 'local',
  //     endpoints: {
  //       signIn: { path: '/login', method: 'post' },
  //       signOut: { path: '/logout', method: 'post' },
  //       signUp: { path: '/register', method: 'post' },
  //       getSession: { path: '/session', method: 'get' },
  //     },
  //     token: {
  //       signInResponseTokenPointer: '/token',
  //       type: 'Bearer',
  //       cookieName: 'auth.token',
  //       headerName: 'Authorization',
  //       maxAgeInSeconds: 1800,
  //       sameSiteAttribute: 'lax',
  //       cookieDomain: 'sidebase.io',
  //       secureCookieAttribute: false,
  //       httpOnlyCookieAttribute: false,
  //     }
  //   },
  // }
})