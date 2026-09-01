import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isComingSoonMode } from "@/lib/coming-soon";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Preview local da página "em breve" em /em-breve
  if (pathname === "/em-breve") {
    const response = NextResponse.next();
    response.headers.set("x-em-breve", "1");
    return response;
  }

  if (!isComingSoonMode()) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/em-breve", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
