import React from "react";
import {
  CardTitle,
  FeaturesCard,
  FeaturesCardWrapper,
  ImageHolder,
  TitleBar,
  Wrapper,
} from "./styles";
// import { Button } from "../button";
import { SubTitle } from "../about/styles";
import { Typography } from "@mui/material";

// images
import comm from "../../assets/images/comm.png";
import analysis from "../../assets/images/analysis.png";
import cross from "../../assets/images/cross.png";
import risk from "../../assets/images/risk.png";
import token from "../../assets/images/token.png";
import manage from "../../assets/images/manage.png";

export const Features = () => {
  return (
    <Wrapper id="features">
      <TitleBar>Features</TitleBar>
      <SubTitle variant="h2" sx={{ textAlign: "center" }}>
        Key{" "}
        <span
          style={{
            background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextTillColor: "transparent",
            color: "transparent",
          }}
        >
          {" "}
          Features
        </span>
      </SubTitle>

      <FeaturesCardWrapper>
        {[
          {
            title: "Smart Position Management",
            subtitle:
              "Dynamic position sizing, risk management tools and flexible leverage settings for users. An interface that supports advanced order types such as stop-loss, take-profit and trailing stop.",
            img: manage,
          },
          {
            title: "In-Depth Market Analysis",
            subtitle:
              " Volume, volatility and trend analysis with real-time data based on blockchain. Customizable tools for charts and indicators. ",
            img: analysis,
          },
          {
            title: "Risk Measurement and Monitoring Tools",
            subtitle:
              " A platform where users can measure their trading risks in advance and test their strategies with simulations. AI-based risk analysis and recommendations.",
            img: risk,
          },
          {
            title: "Cross-Chain Integration",
            subtitle:
              " Compatible with multiple blockchain networks (e.g. Ethereum, Binance Smart Chain, Solana). Easy trading on various platforms thanks to DEX and CEX integrations.",
            img: cross,
          },
          {
            title: "Community-Focused Education and Utilities",
            subtitle:
              " A knowledge center where users can improve their trading skills with educational videos and guides. Weekly market summaries and leverage trading-specific content.",
            img: comm,
          },
          {
            title: "Tokenomics (LEVR Token)",
            subtitle:
              " A utility token called LEVR will be developed. Users will be able to get discounts on trading fees, access to premium features, and community rewards with the token.",
            img: token,
          },
        ].map((item, index) => {
          return (
            <FeaturesCard key={index}>
              <ImageHolder>
                <img src={item.img} alt={item.title} />
              </ImageHolder>
              <CardTitle variant="h5" textAlign="center">
                {item.title}
              </CardTitle>
              <Typography variant="body2" textAlign="center">
                {item.subtitle}
              </Typography>
            </FeaturesCard>
          );
        })}
      </FeaturesCardWrapper>
    </Wrapper>
  );
};
