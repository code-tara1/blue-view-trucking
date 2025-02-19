const buttonStyle = {
  width: "max-content",
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  _active: {
    transform: "scale(0.99)",
  },
  fontWeight: 500,
};

export const buttonRecipes = {
  variants: {
    variant: {
      primary: {
        ...buttonStyle,
        bg: "#00C0FF",
        borderRadius: "50px",
        h: "60px",
        _hover: {
          bg: "#00A0E4",
        },
        color: "white",
      },
      outline: {
        ...buttonStyle,
        border: "2px solid",
      },
      solid: {
        ...buttonStyle,
      },
      subtle: {
        ...buttonStyle,
      },
      surface: {
        ...buttonStyle,
      },
      ghost: {
        boxShadow: "none",
        _active: {
          transform: "scale(0.99)",
        },
      },
    },
  },
  base: {
    colorPalette: "primary",
  },
};
