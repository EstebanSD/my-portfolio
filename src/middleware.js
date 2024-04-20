import { NextResponse } from 'next/server';
import { i18CookieName, fallbackLng, languages } from './app/i18n/settings';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export async function middleware(req) {
  const { cookies, headers, nextUrl, url } = req;
  const { pathname } = nextUrl;

  let lng;
  if (cookies.has(i18CookieName)) lng = cookies.get(i18CookieName).value;
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (!languages.some((loc) => pathname.split('/')[1] === loc && !pathname.startsWith('/_next'))) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, url));
  }

  const response = NextResponse.next();
  // response.cookies.set(i18CookieName, lng);
  if (headers.has('referer')) {
    const refererUrl = new URL(headers.get('referer'));
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) response.cookies.set(i18CookieName, lngInReferer);
  }

  return response;
}
