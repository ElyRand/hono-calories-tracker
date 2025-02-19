"use client";

import { useTRPC } from "@/shared/trpc/client";
import { useQuery } from "@tanstack/react-query";

// <-- hooks can only be used in client components
export default function Test() {
  const trpc = useTRPC();
  const greeting = useQuery(trpc.userList.queryOptions());
  if (greeting.isLoading) return <div>Loading...</div>;
  return <div>{greeting.data}</div>;
}
