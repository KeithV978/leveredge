import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "550px",
}));
export const FeaturesCardWrapper = styled("section")(({ theme }) => ({
  minHeight: "550px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  // gap: 5,
  "&::before": {
    content: '" "',
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "#1c102a",
    filter: "blur(55px)",
    borderRadius: "25px",
    zIndex: -1,
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export const FeaturesCard = styled("div")(({ theme }) => ({
  minHeight: "300px",
  maxWidth: "320px",
}));
export const CardTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
}));
export const ImageHolder = styled("div")(({ theme }) => ({
  width: "100%",
  border: "1px solid #1c1c1c",
  margin: "1rem auto",
  [theme.breakpoints.up("sm")]: {
    width: "60%",
  },
}));
