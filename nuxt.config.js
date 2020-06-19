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
            gender: {
              title: "Gender/Sex",
              description:
                "The terms sex and gender could originally be used synonymously. However, starting from the 1970s, feminists and other deniers of scientifically provable facts, have been using gender to describe a socially imposed construct of roles, based on a person's apparent sex.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Sex",
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
            humanRights: {
              title: "Human Rights",
              description:
                "Albeit all cultures - at least to some degree - share a specific set of values which are considered as human rights, there is no universal definition. This is simply impossible, as any definition of the term stems from humans and is thus, inherently biased.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Human_rights",
            },
            race: {
              title: "Race",
              description:
                "Through shaming tactics and other societal pressures, anyone who dares mention the concept of race in relation to humans, is immediately discredited. Its biological validity is highly controversial, albeit it does not matter, as the term itself is but an informal rank below the level of subspecies and thus, by its very nature, open for interpretation.",
              wikipediaLink:
                "https://en.wikipedia.org/wiki/Race_(human_categorization)",
            },
          },
          subtopics: {
            title: "Subtopics",
            gynocentrism: {
              title: "Gynocentrism",
              description:
                "Contrary to mainstream belief, the modern human lives in a gynocentric society, not a patriarchal one. Some argue this stems from the fact that all primate societies are inherently gynocentric.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Gynocentrism",
            },
            womenAndHypergamy: {
              title: "Women and Hypergamy",
              description:
                'Mentioning the hypergamous nature of women, their ability to "monkey-branch" onto another, more optimal provider whenever beneficial to their cause, has in recent times been disregarded as sexist. Nonetheless, its validity and unparalleled success as evolutionary trait goes unquestioned.',
              wikipediaLink: "https://en.wikipedia.org/wiki/Hypergamy",
            },
            menAndMensRights: {
              title: "Men and Men's Rights",
              description: "",
              wikipediaLink: "",
            },
            feminism: {
              title: "Feminism",
              description:
                "Feminism is both women's and the elite's strongest weapon for controlling the masses and keeping them compliant. Equality of the sexes, from the very beginning of the movement, was but a subterfuge, even though due to indoctrination its followers are unable to see this fact.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Feminism",
            },
            freedomOfExpression: {
              title: "Freedom Of Expression",
              description:
                "Freedom of expression is regarded as a universal human right. Many do not understand the vast implications of any infringements on it and actively police it by prohibiting unwanted single words, phrases, and gestures.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Freedom_of_speech",
            },
            blacks: {
              title: "Blacks",
              description:
                'While many different peoples share a "black" skin color, the term is most commonly used to refer to those of African descent.',
              wikipediaLink: "https://en.wikipedia.org/wiki/Black_people",
            },
          },
          externalResources: {
            title: "External Resources",
            gynocentrismAndItsCulturalOrigins: {
              title: "Gynocentrism and its Cultural Origins",
              description:
                "This site offers a more thorough definition of gynocentrism, as well as insights into the supposed point of emergence as societal form and its implications for man. Additionally, the origins of chivalry and romantic love are examined in great detail.",
            },
            aVoiceForMen: {
              title: "A Voice For Men",
              description:
                "Paul Elam created this site, aiming to educate men and boys about gynocentric society and misandry to decrease the detrimental effects of the latter.",
            },
          },
          tags: {
            biopsychosocial: {
              title: "Biopsychosocial",
              description:
                "Claims made in the source may be derived using the biopsychosocial model, in which biological, psychological, and socio-environmental factors are taken into account.",
              wikipediaLink:
                "https://en.wikipedia.org/wiki/Biopsychosocial_model",
            },
            scientificEvidence: {
              title: "Scientific Evidence",
              description:
                "The source may contain scientifc evidence, which adheres to the standards of the scientific community by deriving the claims made from applying the scientific method.",
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
            opinionEvidence: {
              title: "Opinion Evidence",
              description:
                "The source may contain opinion evidence. While opinions are inherently not scientific as they are subjective, they might still hold some truth, depending on the author's competence, knowledge, and wisdom.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Opinion_evidence",
            },
            hypocrisy: {
              title: "Hypocrisy",
              description:
                "The source may contain hypocritical viewpoints. Whether the hypocrisy stems from any form of indoctrination and thus the author's inability to comprehend their own hypocrisy, is irrelevant. Any claim made should be questioned with a highly critical attitude.",
              wikipediaLink: "https://en.wikipedia.org/wiki/Hypocrisy",
            },
          },
          devilsAdvocates: {
            title: "Devil's Advocates",
            homepage: "Homepage",
            socialMedia: "Social Media",
            works: "Works",
            paulElam: {
              description: "a",
              background: "b",
            },
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
