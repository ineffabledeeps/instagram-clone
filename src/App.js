import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import firstTheme from "./theme/firstTheme"
import {ThemeProvider } from "@mui/material";
import PostPage from "./pages/PostPage";
import Page404 from "./pages/Page404";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <ThemeProvider theme={firstTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/accounts/login" element={<LoginPage />} />
          <Route path="/accounts/signup" element={<SignupPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
          {/* <Navigate from="*" to="/404"></Navigate> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
