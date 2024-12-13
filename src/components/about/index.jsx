import React from "react";
import {
  ImageWrapper,
  Item,
  ItemBody,
  ItemHeader,
  SubTitle,
  TitleBar,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import logo from "../../assets/images/logo/logo.jpg";

export const About = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={logo} alt="lgo" width="100%" />
      </ImageWrapper>
      <Box>
        <TitleBar>About Us</TitleBar>
        <SubTitle variant="h2">Introducing LeverEdge AI</SubTitle>
        <Typography>
          A utility DApp (Decentralized Application) that provides flexible
          trading options and advanced analysis tools to leverage traders to
          make better decisions.
        </Typography>
      </Box>
    </Wrapper>
  );
};
