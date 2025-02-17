import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
