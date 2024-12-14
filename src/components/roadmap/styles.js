import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import circle from "../../assets/images/phase1.png";

export const Wrapper = styled("header")(({ theme }) => ({
  minHeight: "300px",
  padding: "2rem 0 0 1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
export const TitleBar = styled(Typography)(({ theme }) => ({
  border: `1px solid ${[theme.palette.primary.main]}`,
  boxShadow: `0px 0px 10px 0px ${[theme.palette.primary.main]} inset`,
  borderRadius: "25px",
  width: "fit-content",
  padding: ".2rem 1rem",
  margin: "1rem auto",
  color: `${[theme.palette.primary.main]}`,
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  //   margin: "1rem auto",
  width: "fit-content",
}));
export const CardWrapper = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "row",
  width: "100%",
  padding: "1rem 0",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {},
}));
export const Card = styled("div")(({ theme }) => ({
  maxWidth: "260px",
  minWidth: "250px",
  borderBottomLeftRadius: "25px",
  borderTopRightRadius: "25px",
  borderBottomRightRadius: "5px",
  borderTopLeftRadius: "5px",
  //   display: "inline-block",
  //   border: "1px solid #ccc",
  padding: "1rem",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column",
  backgroundImage: "repeating-linear-gradient(45deg, darkblue, #0c602a)",
  [theme.breakpoints.up("sm")]: {},
}));
export const CardTitle = styled(Typography)(({ theme }) => ({
  width: "fit-content",
  fontWeight: 700,
  marginBottom: "1rem",
  [theme.breakpoints.up("sm")]: {},
}));
export const Circle = styled("div")(({ theme }) => ({
  backgroundImage: `url('${circle}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "25px",
  height: "25px",
  [theme.breakpoints.up("sm")]: {},
}));
