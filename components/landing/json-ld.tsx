// Small helpers for emitting schema.org JSON-LD. Structured data is invisible to
// users — it renders as a <script> the crawler reads — but it's the main lever
// for how Google understands the site's hierarchy, which is what feeds organic
// sitelinks under the main result.

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// A BreadcrumbList (Home → … → page). Google uses it both for the breadcrumb
// shown in the result and as a hierarchy signal for sitelinks.
export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
