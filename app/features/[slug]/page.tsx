import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FeaturePage } from "@/components/landing/feature-page"
import { featureSlugs, getFeature } from "@/components/landing/feature-data"

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
  return {
    title: `${feature.badge} · temetro`,
    description: feature.subtitle,
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
  return <FeaturePage feature={feature} />
}
