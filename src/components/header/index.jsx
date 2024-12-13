import * as React from "react";
import { Img, Ul, Wrapper } from "./styles";
import { Button } from "../button";
import logo from "../../assets/images/logo/logo.jpg";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import Telegram from "@mui/icons-material/Telegram";
import X from "@mui/icons-material/X";
import BookRounded from "@mui/icons-material/MenuBookOutlined";
import { Spiral as Hamburger } from "hamburger-react";
import { MobileNav } from "./mobileMenu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    setMenuOpen(event);
  };
  return (
    <React.Fragment>
      <HideOnScroll>
        <Wrapper>
          <Stack direction="row" alignItems="center">
            <Img src={logo} alt="logo" />
            <Typography variant="h6" fontWeight={700}>
              LeverEdgeAI
            </Typography>
          </Stack>

          <Ul>
            <li>
              <Typography>About</Typography>
            </li>
            <li>
              <Typography>Features</Typography>
            </li>
            <li>
              <Typography>Roadmap</Typography>
            </li>
          </Ul>
          <Button bgColor="primary.main" color="#fff" border="none">
            Try Bot
          </Button>
          <Box sx={{ display: { sm: "none", xs: "block" } }}>
            <Hamburger
              easing="ease-in"
              rounded
              label="Mobile menu bar"
              direction="right"
              toggled={menuOpen}
              toggle={setMenuOpen}
            />
          </Box>
        </Wrapper>
      </HideOnScroll>
      <MobileNav toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
    </React.Fragment>
  );
};
