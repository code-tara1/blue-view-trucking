import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./ColorStyle";
import { textStyles } from "./components/textStyles";
import { buttonRecipes } from "./recipes/button.recipe";

const config = defineConfig({
  theme: {
    tokens: {
      colors,
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.50}" },
          subtle: { value: "{colors.gray.50}" },
          emphasized: { value: "{colors.primary.900}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
    recipes: {
      button: buttonRecipes,
    },
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);
