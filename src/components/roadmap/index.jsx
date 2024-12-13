import * as React from "react";
import { SubTitle, TitleBar } from "../about/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardWrapper, Wrapper } from "./styles";

export const Roadmap = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleBar>Roadmap</TitleBar>
        <SubTitle variant="h3">LeverEdge AI Roadmap Journey</SubTitle>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem
          minus nihil odio debitis iusto exercitationem ea dolorum. Beatae,
          amet?
        </Typography>

        <CardWrapper>
          <Card>
            <div>
              <Typography></Typography>
            </div>
          </Card>
        </CardWrapper>
      </Box>
    </Wrapper>
  );
};
