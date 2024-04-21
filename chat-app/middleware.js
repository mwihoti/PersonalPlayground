
import { authMiddleware } from '@clerk/nextjs/server';

// Exporting authMiddleware directly
export default authMiddleware({
  publicRoutes:['/'],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
