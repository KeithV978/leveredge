import React from "react";
import {
  ImageWrapper,
  // Item,
  // ItemBody,
  // ItemHeader,
  SubTitle,
  TitleBar,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import logo from "../../assets/images/logo/logo.png";

export const About = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={logo} alt="lgo" width="100%" />
      </ImageWrapper>
      <Box
        sx={{
          width: { sm: "60%", xs: "100%" },
        }}
      >
        <TitleBar sx={{ margin: { sm: "1rem 0", xs: "1rem auto" } }}>
          About Us
        </TitleBar>
        <SubTitle
          variant="h2"
          sx={{
            textAlign: { sm: "left", xs: "center" },
          }}
        >
          Introducing <br /> LeverEdge AI
        </SubTitle>
        <Typography
          sx={{
            textAlign: { sm: "left", xs: "center" },
          }}
          variant="body2"
        >
          A utility DApp (Decentralized Application) that provides flexible
          trading options and advanced analysis tools to leverage traders to
          make better decisions.
        </Typography>
      </Box>
    </Wrapper>
  );
};
