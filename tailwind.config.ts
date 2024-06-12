/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        coquelicot: "#FF3D00",
        night: "#101211",
        white_smoke: "#EFF1ED",
        orange_web: "#F3A712",
        myrtle_green: "#377771",
      },
      fontFamily:{
        satoshi:"Satoshi-Variable",
        extenda_headings:"ExtendaHeadings",
        roboto_mono:"RobotoMono-Variable",
        extenda_light:"ExtendaXS"
      }
    },
  },
  plugins: [],
};
