import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
  marginBottom: "5rem",
  [theme.breakpoints.up("sm")]: {
    gap: "5rem",
    flexDirection: "row",
    // justifyContent: "right",
  },
}));
export const TitleBar = styled(Typography)(({ theme }) => ({
  border: `1px solid ${[theme.palette.primary.main]}`,
  boxShadow: `0px 0px 10px 0px ${[theme.palette.primary.main]} inset`,
  borderRadius: "25px",
  width: "fit-content",
  padding: ".2rem 1rem",
  marginBottom: "1rem",
  color: `${[theme.palette.primary.main]}`,
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
}));

export const VideoWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  // borderRadius: "15px",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    borderRight: "2px solid #ccc",
    width: "800px",
  },
}));
