import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyles from "src/common/GlobalStyles/GlobalStyles";
import Header from "../Header";
import AppLayout from "../AppLayout/AppLayout";
import HomePage from "src/pages/HomePage";
import CountryOverview from "src/pages/CountryOverview";
import { darkTheme, lightTheme } from "src/common/Themes/colors";
import { useSessionStorageTheme } from "src/common/states/hook/useSessionStorage";

export default function DefaultPage() {  
  const { darkMode, loading } = useSessionStorageTheme();

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>            
            <Route index element={<HomePage />} />
            <Route path="/overview" element={<CountryOverview />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
