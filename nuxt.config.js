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
            fruitText: "TAKE THE FRUIT",
          },
          info: {
            description:
              "Take refuge in this desolate place of reason, science, and forbidden thoughts.",
            listPoints: {
              politicalCorrectness: "political correctness",
              feminism: "feminism",
              fakeNews: "fake news",
            },
          },
          topics: {
            title: "Topics",
            subtopics: "Subtopics",
            gender: {
              title: "Gender",
              gynocentrism: {
                title: "Gynocentrism",
                description:
                  "Contrary to mainstream belief, the modern human lives in a gynocentric society, not a patriarchal one. Some argue this stems from the fact that all primate societies are inherently gynocentric.",
                wikipediaLink: "https://en.wikipedia.org/wiki/Gynocentrism",
                externalResources: {
                  gynocentrismAndItsCulturalOrigins: {
                    title: "Gynocentrism and its Cultural Origins",
                    description:
                      "This site offers a more thorough definition of gynocentrism, as well as insights into the supposed point of emergence as societal form and its implications for man. Additionally, the origins of chivalry and romantic love are examined in great detail.",
                  },
                },
              },
              womenAndSexRoles: {
                title: "Women and Sex Roles",
              },
            },
            biology: {
              title: "Biology",
            },
            religion: {
              title: "Religion",
            },
            diversity: {
              title: "Diversity",
            },
            nwo: {
              title: "New World Order",
            },
          },
          tags: {
            biopsychosocial: {
              title: "Biopsychosocial",
              description: "a",
              wikipediaLink:
                "https://en.wikipedia.org/wiki/Biopsychosocial_model",
            },
            scientificallyProven: {
              title: "Scientifically Proven",
              description:
                "The source adheres to the standards of the scientific community by deriving the claims made from applying the scientific method.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Anecdotal_evidence",
            },
            anecdotalEvidence: {
              title: "Anecdotal Evidence",
              description:
                "The source may contain anecdotal evidence. It is advised to check whether the scientific method was applied for each claim made in the source. Regardless of whether a claim is scientifically proven, it may still hold some truth.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Anecdotal_evidence",
            },
            mensRights: {
              title: "Men's Rights",
              description:
                "Contrary to mainstream belief, the men's rights movement is not the male equivalent to the modern feminism movement. In a literal sense, the term merely encompasses proponents of men's rights.",
              wikipediaLink:
                "https://en.wikipedia.org/wiki/Men's_rights_movement",
            },
          },
          devilsAdvocates: {
            title: "Devil's Advocates",
            paulElam: {
              description: "a",
              background: "b",
            },
          },
          externalResources: {
            title: "External Resources",
          },
          articles: {
            title: "Articles",
          },
          literature: {
            title: "Literature",
          },
          studies: {
            title: "Studies",
          },
          videos: {
            title: "Videos",
          },
          scroll: {
            down: "Scroll Down",
          },
          paypal: "paypal.me/xxx",
          emphasis: {
            fuck: "fuck",
          },
          general: {
            toc: "Table Of Contents",
          },
          ui: {
            back: "Back",
            goToTop: "Go To Top",
            copyLink: "Copy Link",
            source: "Source",
            close: "Close",
            learnMore: "Learn More",
          },
        },
      },
    },
  },
};
