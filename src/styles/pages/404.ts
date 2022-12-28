import { styled } from "..";

export const Error404Container = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: 'auto',

  height: '67.5vh',

  textAlign: 'center',

  backgroundColor: "$purpleCodify900B",

  strong: {
    fontFamily: "PT Sans",
    fontSize: "3.75rem",
  },

  img: {
    width: "80%",
    maxWidth: "40rem",
  }
})