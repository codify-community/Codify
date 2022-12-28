import { styled } from "..";

export const NoResultsFoundContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  strong: {
    fontFamily: "PT Sans",
    fontSize: "4rem",
    color: "$yellow500",

    textAlign: "center",
  },

  "@media (max-width: 700px)": {
    img: {
      width: "15rem",
      height: "15rem",
    }
  }
})