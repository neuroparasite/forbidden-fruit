module.exports = {
  theme: {
    extend: {
      height: {
        screen: "100vh",
        fruit: "12.5rem",
        circleLarge: "26.25rem",
      },
      width: {
        screen: "100vw",
        fruit: "12.5rem",
        fruitText: "7.5rem",
        circleLarge: "26.25rem",
      },
      inset: {
        "20": "1.25rem",
        "24": "1.5rem",
        "32": "2rem",
      },
      minHeight: {},
      maxHeight: {},
      minWidth: {},
      maxWidth: {},
      boxShadow: {
        nice: "1.5rem 1.5rem 2.5rem -1rem",
      },
    },
    colors: {
      primary: "#f2f2f2",
      secondary: "#2d2d2d",
      accent: {
        default: "#eb5757",
      },
      disabled: "#4f4f4f",
    },
    backgroundColor: {
      primary: {
        default: "#2d2d2d",
        dark: "#232323",
        light: "#3a3a3a",
      },
      secondary: "#f2f2f2",
      overlay: "#0d0d0d",
      accent: {
        default: "#eb5757",
      },
    },
    fontSize: {
      "10": "0.625rem",
      "12": "0.75rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "40": "2.5rem",
      "48": "3rem",
      "56": "3.5rem",
      "64": "4rem",
      "80": "5rem",
      "96": "6rem",
      "128": "8rem",
    },
    fontFamily: {
      sans: ["Raleway", "Helvetica, Arial, sans-serif"],
    },
    fontWeight: {
      thin: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    spacing: {
      "0": "0px",
      "4": "0.25rem",
      "8": "0.5rem",
      "10": "0.625rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "32": "2rem",
      "40": "2.5rem",
      "48": "3rem",
      "56": "3.5rem",
      "64": "4rem",
      "80": "5rem",
      "96": "6rem",
      "128": "8rem",
      "192": "12rem",
      "256": "16rem",
      "320": "20rem",
      "384": "24rem",
      "400": "25rem",
    },
    borderWidth: {
      "1": "1px",
      "3": "3px",
    },
  },
  variants: {
    scale: ["hover", "group-hover"],
    translate: ["hover", "group-hover"],
    backgroundColor: ["hover", "group-hover"],
    fontStyle: ["hover"],
    opacity: ["group-hover"],
    width: ["responsive", "group-hover"],
    maxWidth: ["responsive"],
    minHeight: ["last"],
    padding: ["responsive", "hover", "group-hover"],
    margin: ["responsive", "hover", "group-hover", "last"],
    gridColumn: ["first", "last", "even"],
    height: ["responsive", "hover", "group-hover"],
    rotate: ["group-hover"],
  },
  plugins: [],
};
