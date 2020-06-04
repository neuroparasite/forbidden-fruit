export default {
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://forbidden-fruit.now.sh"
        : "http://localhost:3000",
  },
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css", "~/assets/css/custom.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "nuxt-i18n"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend: function(config, { isDev, isClient }) {
      config.node = {
        fs: "empty",
      };
    },
  },
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/typescript-build"],
  axios: {
    // proxyHeaders: false
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          topics: {
            title: "Topics",
            gender: "Gender",
            biology: "Biology",
            religion: "Religion",
            diversity: "Diversity",
            nwo: "New World Order",
          },
          devilsAdvocates: {
            title: "Devil's Advocates",
          },
          externalResources: {
            title: "External Resources",
          },
        },
      },
    },
  },
};
