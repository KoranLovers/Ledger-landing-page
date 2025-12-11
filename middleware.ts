import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Debug logging
  console.log('🔍 Middleware called for:', request.url)
  console.log('  Method:', request.method)
  console.log('  Headers:', {
    'x-requested-with': request.headers.get('x-requested-with'),
    'accept': request.headers.get('accept'),
    'sec-fetch-mode': request.headers.get('sec-fetch-mode'),
    'sec-fetch-dest': request.headers.get('sec-fetch-dest'),
  })

  const isXMLHttpRequest =
    request.headers.get('x-requested-with') === 'XMLHttpRequest'
  const acceptHeader = request.headers.get('accept') || ''
  const secFetchMode = request.headers.get('sec-fetch-mode')
  const secFetchDest = request.headers.get('sec-fetch-dest')

  const isFetchRequest =
    isXMLHttpRequest ||
    (acceptHeader.includes('application/json') &&
      !acceptHeader.includes('text/html')) ||
    secFetchMode === 'cors' ||
    secFetchDest === 'empty'

  console.log('  ✅ Is fetch request?', isFetchRequest)

  if (isFetchRequest) {
    return new NextResponse(
      JSON.stringify({ error: 'Not Found' }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
  return NextResponse.next()
}
//
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
