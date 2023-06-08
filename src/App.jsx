import { Router } from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/context";

export default function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}
