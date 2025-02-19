import { caller, getQueryClient, trpc } from '@/shared/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Test from './components/Test';
export default async function Home() {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(
    trpc.userList.queryOptions(),
  );
  const test = await caller.userList();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {test}
      <Test/>
    </HydrationBoundary>
  );
}