import { RecoilRoot } from "recoil";
import GlobalStyles from "./common/GlobalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CountryOverview from "./pages/CountryOverview";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
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
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
