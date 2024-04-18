import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { cookieName, fallbackLng, languages } from './app/i18n/settings';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export async function middleware(req) {
  const { cookies, headers, nextUrl, url } = req;
  const { pathname } = nextUrl;

  let lng;
  if (cookies.has(cookieName)) lng = acceptLanguage.get(cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (!languages.some((loc) => pathname.startsWith(`/${loc}`)) && !pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, url));
  }

  const response = NextResponse.next();
  if (headers.has('referer')) {
    const refererUrl = new URL(headers.get('referer'));
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  }

  return response;
}
