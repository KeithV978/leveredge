import Container from "@mui/material/Container";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import "./App.css";
import "./assets/fonts/index.css";
import { Footer } from "./components/footer";
import { JoinUs } from "./components/joinus";
import ScrollToTop from "./components/scrollToTop";
import { About } from "./components/about";
import { Roadmap } from "./components/roadmap";

function App() {
  document.title = "LeverEdgeAI - Welcome";
  return (
    <Container
      sx={{
        position: "relative",
      }}
    >
      <main>
        <Header />
        <Hero />
        <About />
        <Features />
        <Roadmap />
        <JoinUs />
      </main>
      <Footer />
      <ScrollToTop />
    </Container>
  );
}

export default App;
