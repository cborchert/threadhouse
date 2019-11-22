import Typography from "typography"

const serif = ["Merriweather", "Georgia", "serif"]
const display = ["Playfair Display", ...serif]
const mono = ["PT Mono", "monospace"]

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: serif,
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
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    ".display": {
      fontFamily: display.join(","),
      fontWeight: 700,
    },
    code: {
      fontFamily: mono.join(","),
    },
    a: {
      color: "#e74c3c",
      textDecoration: "none",
    },
    "a:visited": {
      color: "#e74c3c",
      textDecoration: "none",
    },
    "a:hover": {
      color: "#c0392b",
      textDecoration: "none",
    },
  }),
})
export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
