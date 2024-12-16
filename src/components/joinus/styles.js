import { styled } from "@mui/material";
// import bgImage from "../../assets/images/advan";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  margin: "5rem 1rem",
  padding: "2rem",
  textAlign: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#443f527d",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   height: "50vh",
  // boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.4)",
  position: "relative",
  minHeight: "300px",
  "&::after": {
    content: '" "',
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    // right: "-10px",
    backgroundColor: "#472065",
    filter: "blur(80px)",
    height: "100px",
    width: "100px",
    zIndex: -1,
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-between",
    padding: "4rem 6rem",
    minHeight: "150px",
    flexDirection: "row",
    backgroundSize: "100%",
    borderRadius: "20px",
    textAlign: "left",
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "start",
  },
}));
export const ConnectButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "400px",
}));
