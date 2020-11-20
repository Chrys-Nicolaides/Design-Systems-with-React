import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/systems";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      { name: "Light Theme", props: { theme: lightTheme, default: true } },
      { name: "Dark Theme", props: { theme: darkTheme } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
