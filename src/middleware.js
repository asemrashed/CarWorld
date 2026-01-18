import { NextResponse } from 'next/server';

export function middleware(request) {
  const authCookie = request.cookies.get('auth');
  const { pathname } = request.nextUrl;

  // Protect /sell route
  if (pathname.startsWith('/sell')) {
    if (!authCookie || authCookie.value !== 'true') {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sell/:path*'],
};
