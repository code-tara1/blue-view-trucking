import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  heading: {
    value: {
      fontSize: {
        base: "25px",
        sm: "35px",
        md: "45px",
        lg: "55px",
        "2xl": "60px",
      },
      fontFamily: "Viga",
      lineHeight: {
        base: "30px",
        sm: "40px",
        md: "50px",
        lg: "60px",
        "2xl": "65px",
      },
    },
  },
  caption: {
    value: {
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: {
        base: "16px",
        md: "18px",
        xl: "20px",
      },
    },
  },
  body: {
    value: {
      fontSize: {
        base: "14px",
        md: "16px",
        xl: "18px",
      },
      lineHeight: {
        base: "30px",
        md: "35px",
      },
    },
  },
});
