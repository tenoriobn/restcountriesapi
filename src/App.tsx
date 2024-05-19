import { RecoilRoot } from "recoil";
import GlobalStyles from "./common/GlobalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
