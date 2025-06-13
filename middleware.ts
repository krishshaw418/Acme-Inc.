import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || ''

  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua)

  if (isMobile) {
    // Optionally redirect to a static "unsupported" page
    return NextResponse.redirect(new URL('/unsupported', request.url))
  }

  return NextResponse.next()
}

// Apply middleware to all routes (customize if needed)
export const config = {
  matcher: ['/', '/((?!_next|static|favicon.ico).*)'],
}
