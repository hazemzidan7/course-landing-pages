import type { TrackingParams } from '@/lib/tracking/types';

// Pure, no-op-safe extraction of ad-tracking parameters. No pixel/analytics
// scripts are loaded by this module — that wiring happens in a later step.
export function getTrackingParams(searchParams: URLSearchParams): TrackingParams {
  return {
    source: searchParams.get('source') ?? undefined,
    utmSource: searchParams.get('utm_source') ?? undefined,
    utmMedium: searchParams.get('utm_medium') ?? undefined,
    utmCampaign: searchParams.get('utm_campaign') ?? undefined,
    utmContent: searchParams.get('utm_content') ?? undefined,
    landingPageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
  };
}
