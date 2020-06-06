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
    title: "Forbidden Fruit",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      },
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
          "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
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
          home: {
            quote:
              "“Give me the storm and tempest of thought and action, rather than the dead calm of ignorance and faith”",
            quoteSource: "Robert G. Ingersoll",
            discover: "TAKE THE FRUIT",
          },
          info: {
            description:
              "Take refuge in this desolate place of reason, science, facts, and forbidden thoughts.",
            listText: "Enjoy a curated collection of",
            listPoints: {
              resources:
                "thought-provoking resources about politically-incorrect topics",
              individuals: "awe-inspiring individuals",
              knowledge: "links to places of knowledge",
            },
          },
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
          scroll: {
            down: "Scroll Down",
          },
          paypal: "paypal.me/xxx",
          ui: {
            back: "Back",
            goToTop: "Go To Top",
          },
        },
      },
    },
  },
};
