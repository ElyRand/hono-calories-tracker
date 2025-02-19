import { publicProcedure, router } from "./init";

export const appRouter = router({
  userList: publicProcedure.query(() => {
    return ["user1", "user2", "user3"];
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
