import { routing } from '@/i18n/routing';
import { allHomeContents } from 'contentlayer/generated';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  try {
    // Validate locale against supported locales
    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid locale',
          message: `Locale '${locale}' is not supported. Supported locales: ${routing.locales.join(', ')}`,
          supportedLocales: routing.locales,
        },
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Find home content for the specified locale
    const homeContent = allHomeContents.find(
      (content) => content.slug === 'home' && content.locale === locale,
    );

    if (!homeContent) {
      return NextResponse.json(
        {
          success: false,
          error: 'Content not found',
          message: `Home content not found for locale: ${locale}`,
          locale: locale,
        },
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: homeContent,
        locale: locale,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
          'X-Locale': locale,
        },
      },
    );
  } catch (error) {
    console.error('Error fetching home content:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message:
          error instanceof Error ? error.message : 'Unknown error occurred',
        locale: locale,
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}

// Add OPTIONS method for CORS support
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Locale',
    },
  });
}
