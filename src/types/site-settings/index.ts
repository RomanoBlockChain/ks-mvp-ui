export type siteSettingType = {
  seo: {
    title: string
    description: string
    keywords: string
    favicon: string
    ogImage: string
  }
  urlRedirect: {
    from: string
    to: string
  }
}
