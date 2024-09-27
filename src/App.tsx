import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultPage from "./components/DefaultPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <DefaultPage />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
