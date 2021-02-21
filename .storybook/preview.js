import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: [
    { name: "Light theme", value: "#DBC4F5" },
    { name: "Dark theme", value: "#1a202c", default: true },
  ],
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));
