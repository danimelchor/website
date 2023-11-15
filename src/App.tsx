import Home from "pages/Home";
import { ThemeProvider } from "providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
