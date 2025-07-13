import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export async function middleware(request: NextRequest) {
  const token = (await cookies()).get('access-token');
  const nextSessionToken = (await cookies()).get('__Secure-next-auth.session-token');
  if (token || nextSessionToken) return NextResponse.redirect(new URL('/', request.url));
}
 
export const config = {
  matcher: ['/login', '/signup'],
}