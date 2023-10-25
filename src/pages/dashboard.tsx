import MainSection from "@/components/Dashboard/Components/MainSection";
import Templates from "@/components/Dashboard/Models/Templates";
import Header from "@/includes/Header";
import * as React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export interface IAppProps {}

export default function Dashboard(props: IAppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MainSection />
        {/* Models */}
        <Templates />
      </QueryClientProvider>
    </>
  );
}
