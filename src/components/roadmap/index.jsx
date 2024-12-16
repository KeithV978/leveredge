import {
  Wrapper,
  SubTitle,
  TitleBar,
  CardWrapper,
  Card,
  CardTitle,
  Circle,
} from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
import BlurOnRounded from "@mui/icons-material/BlurOnRounded";

export const Roadmap = () => {
  return (
    <Wrapper id="roadmap">
      <div>
        <TitleBar>Roadmap</TitleBar>
        <SubTitle variant="h2">
          Roadmap
          <span
            style={{
              background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              webkitTextTillColor: "transparent",
              color: "transparent",
            }}
          >
            {" "}
            Features
          </span>
        </SubTitle>
      </div>

      <CardWrapper>
        <div
          className="roadmap"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            padding: "2rem 0",
            overflowX: "auto",
            // scrollbarWidth: "10px",
            // scrollbarColor: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
          }}
        >
          {/* 1 */}
          <Card>
            <CardTitle variant="body1">
              Sentiment Analysis and Social Media Data Integration
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q1 2025</Typography>
            </Stack>

            <List>
              {[
                "Market sentiment measurement with data analysis from platforms such as Twitter, Reddit, Telegram.",
                "Ability to optimize users' trading strategies based on sentiment data with AI-powered prediction system.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <BlurOnRounded />
                  </ListItemIcon>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 2 */}
          <Card>
            <CardTitle variant="body1">
              Automatic Strategy Bots (Algo Trading)
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q1 2025</Typography>
            </Stack>

            <List>
              {[
                "A tool that allows users to create trading bots that work according to predefined rules.",
                "Simple bot design with “Drag and Drop” logic or code-based integration for professionals.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 3 */}
          <Card>
            <CardTitle variant="body1">
              Cross-Chain Liquidity Management
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q2 2025</Typography>
            </Stack>

            <List>
              {[
                "Cross-chain bridge system that allows users to manage their assets on multiple chains from a single interface.",
                "Facilitates liquidity management with low-fee and fast transfers.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 4 */}
          <Card>
            <CardTitle variant="body1">Dynamic Leverage Options</CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q2 2025</Typography>
            </Stack>

            <List>
              {[
                "Leverage ratios automatically adjusted according to the size of the transaction and risk level.",
                "Users can choose the “risk mode” suitable for their profile: High Risk, Medium Risk, Low Risk.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 5 */}
          <Card>
            <CardTitle variant="body1">
              Gamification and Community Engagement
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q3 2025</Typography>
            </Stack>

            <List>
              {[
                "Rewarding the most successful traders with the “Leaderboards” system.",
                "Organizing weekly and monthly trading competitions.",
                "“Task Completion” feature where users can earn tokens from the tasks they complete.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 6 */}
          <Card>
            <CardTitle variant="body1">Goal-Based Trading</CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q3 2025</Typography>
            </Stack>

            <List>
              {[
                "A feature that allows users to open positions that are automatically closed when a certain profit/loss level is reached in a transaction.",
                "Structured portfolio management according to long-term goals.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 7 */}
          <Card>
            <CardTitle variant="body1">
              Premium Membership and Rewards with NFTs
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q3 2025</Typography>
            </Stack>

            <List>
              {[
                "Users can earn premium membership benefits by purchasing special NFTs.",
                "These NFTs can generate income through staking or offer discounts on the trading platform.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 8 */}
          <Card>
            <CardTitle variant="body1">
              Portfolio Analysis and Optimization
            </CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q3 2025</Typography>
            </Stack>

            <List>
              {[
                "Tools for users to visualize and optimize the performance of their portfolios.",
                "Automatic reports that analyze risk/reward ratios and transaction costs.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 9 */}
          <Card>
            <CardTitle variant="body1">Panic Mode (Emergency Mode)</CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q4 2025</Typography>
            </Stack>

            <List>
              {[
                "A feature that allows users to close all their positions with a single click when the market falls or rises rapidly.",
                "Automatic panic mode triggered according to pre-set conditions.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 10 */}
          <Card>
            <CardTitle variant="body1"> Web3 Wallet Integration</CardTitle>
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>Q4 2025</Typography>
            </Stack>

            <List>
              {[
                "One-click login and transaction via wallets such as MetaMask, Phantom, Trust Wallet.",
                "Direct staking and token transfers via wallet.",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
      </CardWrapper>
    </Wrapper>
  );
};
