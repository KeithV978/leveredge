import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0",
  [theme.breakpoints.up("sm")]: {},
}));
export const CardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const Card = styled("div")(({ theme }) => ({
  maxWidth: "320px",
  padding: "1.2rem",
  borderBottomLeftRadius: "20px",
  borderTopRightRadius: "20px",
  backgroundColor: "#0e88b2",
}));
