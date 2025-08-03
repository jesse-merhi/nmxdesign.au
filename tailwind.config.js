const Unfonts = require("unplugin-fonts");
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
      bungee: ['Bungee Shade'],
      lindsey: ['Lindsey Signature'],
      pfMarlet: ['PF Marlet Medium'],
      pfMarletItalic: ['PF Marlet Medium Italic']
    },
    extend: {
      colors: {
        'brand-background': '#FFFBF7',
        'brand-text': '#1C1B19',
        'brand-accent': '#E9F29A',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    Unfonts.default.vite({
      custom: {
        families: [
          {
            name: "Lindsey Signature",
            local: "Lindsey Signature",
            src: "../public/fonts/LindseySignature.ttf",
          },
          {
            name: "PF Marlet Medium",
            local: "PF Marlet Medium",
            src: "../public/fonts/PF_Marlet_Display_Medium.otf",
          },{
            name: "PF Marlet Medium Italic",
            local: "PF Marlet Medium Italic",
            src: "../public/fonts/PF_Marlet_Display_Medium_Italic.otf",
          },
        ],
      },
    }),
  ],
};
