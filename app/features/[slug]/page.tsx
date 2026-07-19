import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FeaturePage } from "@/components/landing/feature-page"
import { featureSlugs, getFeature } from "@/components/landing/feature-data"
import { JsonLd, breadcrumbList } from "@/components/landing/json-ld"

const siteUrl = "https://www.temetro.com"

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = getFeature(slug)
  if (!feature) return {}
  // Use the long, descriptive feature title (the layout template appends
  // "· temetro"), so each feature page has a distinct, keyword-rich title —
  // clearer for users and a stronger signal for sitelinks than a bare badge.
  return {
    title: feature.title,
    description: feature.subtitle,
    alternates: { canonical: `/features/${slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/features/${slug}`,
      title: `${feature.badge} · temetro`,
      description: feature.subtitle,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = getFeature(slug)
  if (!feature) notFound()
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: siteUrl },
          { name: feature.badge, url: `${siteUrl}/features/${slug}` },
        ])}
      />
      <FeaturePage feature={feature} />
    </>
  )
}
