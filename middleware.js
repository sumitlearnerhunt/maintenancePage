import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Redirect all requests to the root (`/`), except for static files and API routes
  if (
    !url.pathname.startsWith("/_next") && // Exclude static assets
    !url.pathname.startsWith("/api") && // Exclude API routes
    url.pathname !== "/" // Avoid infinite redirect for `/`
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
