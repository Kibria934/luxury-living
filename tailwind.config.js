/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  // theme: {
  //   // extend: {
  //   //   colors: {
  //   //     bg: '#F6F6F6',
  //   //     primary: '#251D58',
  //   //     secondary: "#1F1632"
  //   //   },
  //   //   fontSize: {
  //   //     default: '16px  '
  //   //   }
  //   // },
  // },
  theme: {
    extend: {
      colors: {
        "navi": "#003060"

      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570DF8",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}