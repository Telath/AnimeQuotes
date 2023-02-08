import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { HomeScreen } from "./src/screens/HomeScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
