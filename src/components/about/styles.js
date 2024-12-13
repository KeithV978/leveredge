import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
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
export const SubTitle = styled(Typography)(({ theme }) => ({}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  width: "30%",
}));
