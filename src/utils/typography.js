import Typography from "typography"

// CONSIDER USING FOR DISPLAY
// font-family: 'Amarante', cursive;
// font-family: 'Calistoga', cursive;
// font-family: 'Baskervville', serif;
// font-family: 'Playfair Display', serif;

const serif = ["Merriweather", "Georgia", "serif"]
const sans = [
  "Montserrat",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]
const display = ["Playfair Display", ...serif]
const mono = ["PT Mono", "monospace"]

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: sans,
  bodyFontFamily: serif,
  googleFonts: [
    {
      name: "Playfair Display",
      styles: ["700"],
    },
    {
      name: "PT Mono",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Montserrat",
      styles: ["700"],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    ".serif": {
      fontFamily: display.join(","),
    },
    code: {
      fontFamily: mono.join(","),
    },
    a: {
      color: "#e74c3c",
      textDecoration: "none",
    },
    "a:hover": {
      color: "#c0392b",
      textDecoration: "none",
    },
    "a:visited": {
      color: "#e74c3c",
    },
  }),
})
export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
