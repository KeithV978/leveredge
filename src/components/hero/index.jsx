import React from "react";
import {
  FirstCircleWrapper,
  // Img,
  Maintext,
  SecondCircleWrapper,
  LStars,
  RStars,
  // Network,
  // SuperText,
  TextWrapper,
  Wrapper,
} from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MuiBtn from "@mui/material/Button";
// import { Button } from "../button";
// import tron_hand from "../../assets/images/hero/hero_.png";
// import Container from "@mui/material/Container";

import { BOT_LINK, DASH } from "../../utils/links";
// import { useTheme } from "@mui/material";
import hero from "../../assets/images/hero/hero1.jpg";

import uniswap from "../../assets/images/p1.png";
import eth from "../../assets/images/p2.png";
import dex from "../../assets/images/p3.png";
import coin from "../../assets/images/p4.png";
import circle1 from "../../assets/images/hero/dot-circle1.png";
import circle2 from "../../assets/images/hero/dot-circle2.png";

export const Hero = () => {
  // const theme = useTheme();
  return (
    <Wrapper id="hero">
      <LStars />
      <RStars />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { sm: "30%", xs: "50%" },
            // margin: "auto",
          }}
        >
          <img
            src={hero}
            alt="hero"
            style={{
              animation: "scaler 5s infinite",
              // position: "absolute",
              // top: "50%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
              // zIndex: -1,
            }}
          />
        </Box>

        <FirstCircleWrapper>
          <img
            src={circle1}
            alt="first circle"
            style={{
              animation: "clockrotate 3.6s infinite ease-in-out",
            }}
          />
        </FirstCircleWrapper>
        <SecondCircleWrapper>
          <img
            src={circle2}
            alt="second circle"
            style={{
              animation: "anticlockrotate 3s infinite ease-in-out",
            }}
          />
        </SecondCircleWrapper>
      </Box>
      <Box sx={{ marginTop: "7rem" }}>
        <TextWrapper>
          <Maintext variant="h3">
            <span
              style={{
                color: "#fff",
              }}
            >
              Smart and Flexible{" "}
            </span>
            <br />
            Solutions for Leverage Trading
          </Maintext>
        </TextWrapper>
      </Box>

      <Stack
        sx={{
          gap: 2,
          marginTop: { sm: "2rem", xs: "1rem" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link href={BOT_LINK}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "#ccc",
              borderRadius: "25px",
              height: "3rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Try Bot
          </Button>
        </Link>
        <MuiBtn
          variant="outlined"
          href={DASH}
          sx={{
            backgroundColor: "#fff",
            height: "3rem",
            color: "#1c1c1c",
            borderRadius: "25px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            textTransform: "capitalize",
          }}
        >
          Buy Now
        </MuiBtn>
      </Stack>

      <Box
        sx={{
          padding: { sm: "5rem 2rem 2rem", xs: "3rem 0" },
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="body2"
          textTransform="uppercase"
          color="#767676"
          letterSpacing="4px"
        >
          Flexible and Advanced tools for smart choices
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            "& li": {
              padding: "0 1rem",
            },
          }}
        >
          <li>
            <img src={uniswap} alt="uniswap" />
          </li>
          <li>
            <img src={eth} alt="eth" />
          </li>
          <li>
            <img src={dex} alt="dex" />
          </li>
          <li>
            <img src={coin} alt="coin" />
          </li>
        </Box>
      </Box>
    </Wrapper>
  );
};
