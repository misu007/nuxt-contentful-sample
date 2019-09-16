const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  devModules: ['@nuxtjs/vuetify'],
  vuetify: {
    theme: {
      dark: false
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || 'nydwclp1fknz',
    CTF_D_ACCESS_TOKEN: process.env.CTF_D_ACCESS_TOKEN || 'Msq_RNFjEJV-pAp9j571BkImrv0tfAmMYr4gLbLbq4A',
    CTF_P_ACCESS_TOKEN: process.env.CTF_P_ACCESS_TOKEN || 'k_sd_S4rK37zmVmeLKhP5MSjKzkPa_l8yY-GYHNwgX0',
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT || 'dev'
  },
  router: {
    scrollBehavior(_to, _from, savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (savedPosition) {
            resolve(savedPosition)
          } else {
            resolve({ x: 0, y: 0 })
          }
        }, 20)
      })
    }
  }
}
