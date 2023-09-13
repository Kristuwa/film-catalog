import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>My app</p>
    </ThemeProvider>
  );
}

export default App;
