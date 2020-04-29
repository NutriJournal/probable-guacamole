const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      plusPink: "#FF19A3",
      headFoot: "#363537",
      mobileFoot: "#F9F9F9",
      chartPurple: "#DAC5FF"
    }),
    inset: theme => ({
      "halfCircle-X": "21px",
      "halfCircle-Y": "8px",
      "halfCircle|X": "22px",
      "halfCircle|Y": "4px"
    }),
    textColor: theme => ({
      ...theme("colors"),
      footerText: "#5A5A5A"
    }),
    extend: {
      colors: {
        "soft-gray": "#e5e5e5",
        "dark-gray": "#5A5A5A",
        "btn-pink": "#FE42B3",
        "active-blue": "#8D4CFF",
        "item-hover": "#1F7Da2",
        "cyan-300": "#00426C",
        "red-100": "#B10505",
        "pink-200": "#FFEDF7",
        "pink-300": "#FFA5DB",
        "pink-400": "#FE42B3",
        "pink-500": "#FF19A3",
        "orange-100": "#D89F0E",
        "teal-100": "#ACF3F8",
        "teal-200": "#82F7FF",
        "teal-300": "#24EEFB",
        "teal-400": "#00E2F0",
        "green-100": "#D5E2A2",
        "green-200": "#B5CD57",
        "green-300": "#A5CE03",
        "green-400": "#CCFF00",
        "green-450": "#9ABA19",
        "green-500": "#4D8037",
        "purple-100": "#DAC5FF",
        "purple-200": "#D7B8FF",
        "purple-300": "#BF9BFF",
        "purple-400": "#A674FF",
        "purple-500": "#8D4CFF",
        "gray-10": "#F9F9F9",
        "gray-50": "#EAEAEA",
        "gray-100": "#B7B7B7",
        "gray-200": "#797979",
        "gray-300": "#5A5A5A",
        "gray-400": "#363537",
        "blue-400": "#00426C",
        "mr-96": "24rem",
      },
      height: {
        "96": "24rem"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active", "disabled"],
    cursor: ["disabled", "hover"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
