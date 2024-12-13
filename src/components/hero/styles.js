import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import lstars from "../../assets/images/hero/left-stars.png";
import rstars from "../../assets/images/hero/right-stars.png";

export const Wrapper = styled("section")(({ theme }) => ({
  textAlign: "center",
  paddingTop: "4rem",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-5px",
    width: "100px",
    height: "100px",
    backgroundColor: "#1c102a",
    filter: "blur(75px)",
    borderRadius: "50%",
    zIndex: -1,
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "5rem",
  },
}));
export const TextWrapper = styled("div")(({ theme }) => ({
  width: "fit-content",
  margin: "0 auto",
  // background: `linear-gradient(180deg, #fff, #181818)`,
  // webkitBackgroundClip: "text",
  // webkitTextFillColor: "transparent",
  // backgroundClip: "text",
  // textFillColor: "transparent",
  // marginBottom: "1rem",
}));
export const Maintext = styled(Typography)(({ theme }) => ({
  // letterSpacing: ".2rem",
  textWrap: "wrap",
  width: "100%",
  background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
  backgroundClip: "text",
  webkitBackgroundClip: "text",
  webkitTextTillColor: "transparent",
  color: "transparent",
  [theme.breakpoints.up("sm")]: {
    // width: "50%",
    margin: "0 auto",
    // letterSpacing: ".5rem",
  },
}));
export const SuperText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#767676 !important",
}));
export const Img = styled("img")(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "360px",
  },
}));
export const FirstCircleWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.up("sm")]: {},
}));
export const SecondCircleWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  [theme.breakpoints.up("sm")]: {},
}));
export const LStars = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "5",
  left: "5",
  width: "100%",
  height: "300px",
  backgroundImage: `url('${lstars}')`,
  [theme.breakpoints.up("sm")]: {},
}));
export const RStars = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "5",
  left: "5",
  width: "100%",
  height: "300px",
  backgroundImage: `url('${rstars}')`,
  [theme.breakpoints.up("sm")]: {},
}));
export const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "100%",
  },
}));
