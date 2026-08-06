const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Shared base metadata for both locale root layouts (app/(en)/layout.tsx,
// app/ar/layout.tsx) so title/description/metadataBase can't drift between
// them. Per-page metadata (course pages) overrides title/description via
// generateMetadata.
export const baseMetadata = {
  title: 'EDUZAH Course Landing Pages',
  description: 'EDUZAH course landing pages for paid advertising campaigns.',
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
};
