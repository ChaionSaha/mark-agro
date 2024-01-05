module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#29844B",
          "base-200": "#F3F4F6",
        },
      },
      "light",
    ],
  },
};
