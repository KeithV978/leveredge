import React from "react";
import { ConnectButtonWrapper, Title, Wrapper } from "./styles";

// import { WalletWalletConnect } from "@web3icons/react";
// import LinkRounded from "@mui/icons-material/RocketLaunchRounded";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BOT_LINK } from "../../utils/links";

export const JoinUs = () => {
  return (
    // <div>
    <Wrapper>
      <Box sx={{ width: { sm: "40%", xs: "100%" } }}>
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          Join Us{" "}
          <span
            style={{
              background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              webkitTextTillColor: "transparent",
              color: "transparent",
            }}
          >
            Today
          </span>
        </Typography>
        <Title variant="h6" sx={{ textAlign: "left" }}>
          Stay connected with us by joining us on our socials!
        </Title>
      </Box>
      <ConnectButtonWrapper>
        <Link href={BOT_LINK} sx={{ textDecoration: "none" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              borderRadius: "25px",
              height: "3rem",
            }}
          >
            Join Community
          </Button>
        </Link>
        <Link href={BOT_LINK} sx={{ textDecoration: "none" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#1c1c1c",
              borderRadius: "25px",
              height: "3rem",
            }}
          >
            Buy Now
          </Button>
        </Link>
      </ConnectButtonWrapper>
    </Wrapper>
    // </div>
  );
};
