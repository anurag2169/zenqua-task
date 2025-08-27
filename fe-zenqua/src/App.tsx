import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { theme } from "./theme/theme";
import Header from "./components/common/Header";
import HeroSection from "./components/common/HeroSection";
import DealsDashboard from "./components/deals/DealsDashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="bg-[#c4dcf2] pb-4" sx={{ minHeight: "100vh" }}>
        <Header />
        <HeroSection />
        <DealsDashboard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
