import React from "react";
import { LogoWrapper, Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Telegram from "@mui/icons-material/Telegram";
// import X from "@mui/icons-material/X";
import logo from "../../assets/images/logo/logo.png";

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <LogoWrapper>
              <img src={logo} alt="logo" />
            </LogoWrapper>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              LeverEdgeAI
            </Typography>
          </div>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            An intuitive platform designed for individuals and corporations
          </Typography>
        </div>
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Stack gap={2} direction="column" sx={{ color: "#8d8d8d" }}>
            <Typography
              variant="body2"
              sx={{ color: "#fff", margin: "1rem 0" }}
            >
              Company
            </Typography>
            <Typography variant="body2">About</Typography>
            <Typography variant="body2">Use Cases</Typography>
            <Typography variant="body2">Tokenomic</Typography>
          </Stack>
          <Stack gap={2} direction="column" sx={{ color: "#8d8d8d" }}>
            <Typography
              variant="body2"
              sx={{ color: "#fff", margin: "1rem 0" }}
            >
              Support
            </Typography>
            <Typography variant="body2">Features</Typography>
            <Typography variant="body2">Roadmap</Typography>
          </Stack>
          <Stack gap={2} direction="column" sx={{ color: "#8d8d8d" }}>
            <Typography
              variant="body2"
              sx={{ color: "#fff", margin: "1rem 0" }}
            >
              Policy
            </Typography>
            <Typography variant="body2">Terms of use</Typography>
            <Typography variant="body2">Privacy policy</Typography>
            <Typography variant="body2">Refund policy</Typography>
          </Stack>
          <Stack gap={2} direction="column" sx={{ color: "#8d8d8d" }}>
            <Typography
              variant="body2"
              sx={{ color: "#fff", margin: "1rem 0" }}
            >
              Contact
            </Typography>
            <Typography>info@mail.com</Typography>
          </Stack>
        </Box>
      </Wrapper>
      <br />
      <br />
      <Divider sx={{ borderColor: "rgba(250, 255, 255, .1)" }} />
      <Box sx={{ padding: "2rem 0", textAlign: "center" }}>
        <Typography variant="body2">
          Copyright © 2024 LeverEdgeAI. All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};
