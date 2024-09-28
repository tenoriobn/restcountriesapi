import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import DefaultPage from "./components/DefaultPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          <DefaultPage />
        </AnimatePresence>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
